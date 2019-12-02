import get from 'lodash/get'
import orderBy from 'lodash/orderBy'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors, device, fonts } from '../../constants'
import Heading, { StyledHeading } from '../Heading'
import Icon from '../Icon'
import Search from '../Search'
import { InputWrapper } from '../Search/SearchInput'
import Select, { StyledControlDropdown } from '../Select'

const TableWrapper = styled.div`
  ${StyledHeading} {
    font-size: 18px;
    letter-spacing: 0.5px;
    line-height: 23px;
  }

  ${InputWrapper} {
    margin-bottom: 30px;
  }
`

const StyledTable = styled.table`
  position: relative;
  display: grid;
`

const StyledTableHeader = styled.thead`
  font-family: ${fonts.cera};
  font-size: 12px;
  text-transform: uppercase;
  line-height: 15px;
  margin-bottom: 10px;
  width: calc(100% - 50px);
  tr {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(50px, 1fr);
  }
`

const StyledHeaderCell = styled.th`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  line-height: 15px;

  ${({ hideOnMobile }) => hideOnMobile && `
        display: none;
        @media ${device.tablet} {
            display: flex;
        }
    `}

  .icon-wrapper {
    margin-left: 60px;
    position: relative;
    ${({ isSortedDesc }) => isSortedDesc && `
            transform: rotate(180deg);
        `}
  }
`
const StyledTableBody = styled.tbody`
  display: grid;
  font-family: ${fonts.literata};
  font-size: 14px;
  tr {
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    ${({ hasOptions }) => !hasOptions && `
            width: calc(100% - 50px);
    `}
  }

  ${({ hideOnMobile }) => hideOnMobile && `
        display: none;
        @media ${device.tablet} {
            display: flex;
        }
    `}
  .options-cell ${StyledControlDropdown} {
    min-width: 200px;
    right: 155px;
    top: -6px;
  }
`

const StyledTableCell = styled.td`
  ${({ hasData }) => hasData
        ? `
            flex: 1;
        `
        : `
            margin-left: auto;
            width: 50px;
        `}
`

const OptionsButton = styled.button`
  border: 0px;
  outline: none;
  background: none;
  display: block;
  width: 50px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  span {
    display: inline-block;
    height: 5px;
    width: 5px;
    background: ${colors.coral};
    border-radius: 100%;
    position: relative;
    &:first-child {
      right: 3px;
    }
    &:last-child {
      left: 3px;
    }
  }
  &:hover {
    span {
      background: ${colors.lightSalmon};
    }
  }
`

const Table = props => {
    const [searchVal, setSearchVal] = useState('')
    const [sort, setSort] = useState([null, null])
    const [filteredData, setFilteredData] = useState(props.data)

    const handleColumnClick = (column) => {
        const { accessor } = column
        if (!sort.includes(column.accessor)) {
            setSort([accessor, 'desc'])
        } else if (sort[1] === 'desc') {
            setSort([accessor, 'asc'])
        } else {
            setSort([null, null])
        }
    }

    const filterFunc = useCallback(() => {
        const query = searchVal.toLowerCase()
        if (query) {
            let filters = props.columns.filter(column => column.isFilterable)
            if (!filters.length) {
                filters = props.columns
            }
            const accessors = filters.map(filter => filter.accessor)
            return props.data.filter(data => accessors.some(key => String(get(data, key, '')).toLowerCase().includes(query)))
        }
        return props.data
    }, [props.data, searchVal, props.columns])

    useEffect(() => {
        const newFiltered = filterFunc()
        setFilteredData(
            sort[0] ? orderBy(newFiltered,
                ...sort
            ) : newFiltered
        )
    }, [filterFunc, props.data, searchVal, sort])

    return (
        <TableWrapper>
            {props.title && (
                <Heading level={5} uppercase>
                    {props.title}
                </Heading>
            )}
            {props.hasSearch && (
                <Search
                    hasDropdown={false}
                    placeholder={props.placeholder}
                    value={searchVal}
                    onInputChange={e => {
                        setSearchVal(e.target.value)
                    }}
                />
            )}
            <StyledTable>
                <StyledTableHeader>
                    <tr>
                        {props.columns.map(column => {
                            const isSorted = sort.includes(column.accessor)
                            const isSortedDesc = isSorted && sort.includes('desc')

                            return (
                                <StyledHeaderCell
                                    key={column.accessor}
                                    isSortedDesc={isSortedDesc}
                                    hideOnMobile={column.hideOnMobile}
                                    onClick={() => handleColumnClick(column)}
                                >
                                    {column.label}
                                    {isSorted && (
                                        <Icon
                                            icon="dropdown-arrow"
                                            fillColor="salmon"
                                            width={12}
                                            height={6}
                                        />
                                    )}
                                </StyledHeaderCell>
                            )
                        })}
                    </tr>
                </StyledTableHeader>
                <StyledTableBody hasOptions={!!props.options.length}>
                    {filteredData.map(row => (
                        <tr key={row.id}>
                            {props.columns.map(column => {
                                const value = get(row, column.accessor, '')
                                const cellPath = row.id + column.accessor
                                return (
                                    <StyledTableCell
                                        key={cellPath}
                                        hasData={true}
                                        hideOnMobile={column.hideOnMobile}
                                    >
                                        {props.customComponents.cell ? props.customComponents.cell(value, row, column, cellPath) : value}
                                    </StyledTableCell>
                                )
                            })}
                            {!!props.options.length && (
                                <StyledTableCell hasData={false} className="options-cell">
                                    <Select
                                        customPlaceholder={true}
                                        showResetControls={false}
                                        renderCustomPlaceholder={(title, _) => (
                                            <OptionsButton ref={title}>
                                                <span />
                                                <span />
                                                <span />
                                            </OptionsButton>
                                        )}
                                        options={props.options}
                                        handleSelectChange={(_, __, option) =>
                                            option.onClick(option, row)
                                        }
                                    />
                                </StyledTableCell>
                            )}
                        </tr>
                    ))}
                </StyledTableBody>
            </StyledTable>
        </TableWrapper>
    )
}

Table.propTypes = {
    /** Override components with custom ones
     * (only table cell supported for now) */
    customComponents: PropTypes.object,
    /** Columns for the table.
     *
     * Must be array with objects containing following keys:
     * - accessor: Path of the value column uses, can be deeply nested. Component will check this accessor to filter and render table values
     * - label: The name rendered for the column
     *
     * Optional keys:
     * - hideOnMobile: Whether to hide the column on mobile
     * - isFilterable: Whether the column can be filtered by search box. If no column has this key, all columns will be filterable */
    columns: PropTypes.arrayOf(PropTypes.shape({
        accessor: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        hideOnMobile: PropTypes.bool,
        isFilterable: PropTypes.bool
    })).isRequired,
    /** Options for the options dropdown at the end of the table row
     * option button will not render unless there are options
     *
     * In addition to `id` and `name` fields, all options must have a `onClick`
     * function, which is passed the `option` and `row` as arguments.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        onClick: PropTypes.func,
        name: PropTypes.string
    })),
    /** Data array, any objects inside should have an id key for uniqueness */
    data: PropTypes.array,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    /** Whether there is a search box rendered */
    hasSearch: PropTypes.bool
}

Table.defaultProps = {
    customComponents: {
    },
    placeholder: 'Search table',
    options: [],
    data: []
}

export default Table
