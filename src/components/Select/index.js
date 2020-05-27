import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown, IoIosClose } from 'react-icons/io'
import styled from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'
import Button from '../Button'

const UnavailableItem = `
    position: relative;
    pointer-events: none;
    cursor: default;
`

const dropdownVisible = `
    opacity: 1;
    visibility: visible;
`

const StyledControlItem = styled.div`
  position: relative;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.black};
  border: 2px solid ${colors.black};
  height: 36px;
  line-height: 32px;
  border: none;
  box-shadow: none;
  transition: 0.5s;
  outline: none;

  ${({ isFetching }) => isFetching && UnavailableItem};
`

const StyledControlDropdown = styled.div`
  padding-left: 9px;
  padding-right: 11px;
  border-top-width: 0;
  box-shadow: none;
  padding-bottom: 10px;
  font-family: ${fonts.cera};
  position: relative;
  padding-top: 10px;
  z-index: 99;
  border-top: none;
  position: relative;
  top: -2px;
  border: 2px solid ${colors.black};
  border-radius: 0;
  transition: none;
  background-color: ${colors.white};
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  max-height: ${({ offset }) => `calc(100vh - ${offset}px)`};
  ${({ isVisible }) => isVisible && dropdownVisible};

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 8px;
    right: 8px;
    height: 2px;
    background-color: ${colors.black};
    z-index: 10;
  }

  > .icon-wrapper {
    position: absolute;
  }
`

const StyledEmptyOption = styled.div`
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  height: 32px;
  line-height: 32px;
  color: ${colors.black};
  padding: 1px 16px 0;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  pointer-events: none;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`

const StyledViewAllOption = styled.div`
  text-transform: uppercase;
  position: relative;
  height: 32px;
  line-height: 32px;
  padding: 1px 16px 0;
  font-weight: bold;
  color: ${colors.black};
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  border-bottom: 2px solid ${colors.black};
  font-size: 16px;
  outline: none;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`

const StyledDefaultOption = styled.div`
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  color: ${colors.black};
  height: 32px;
  line-height: 32px;
  padding: 1px 16px 0;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: ${({ bordered }) =>
        bordered ? `2px solid ${colors.black}` : 'none'};
  ${({ selected }) => selected && `
    background-color: ${colors.black};
    color: ${colors.white};
`};

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .icon-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 8px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .icon-container {
    position: relative;
    top: 1px;
  }
`

const StyledFilter = styled.div`
    min-width: 0;
    position: relative;
    font-family: ${fonts.cera};
    letter-spacing: 0.8px;
`

const StyledButton = styled(Button)`
    display: flex;
    padding-right: 10px;
`

const StyledText = styled.div`
    flex: 1;
    color: ${colors.black};
    ${props => props.isFilterSelected && `
        color: ${colors.white};
    `};
`

const StyledArrow = styled(IoMdArrowDropdown)`
    font-size: 30px;
    color: ${colors.coral};
    ${props => props.isFilterSelected && `
        color: ${colors.white};
    `};
`

const Select = props => {
    const [isOpened, setIsOpened] = useState(props.isOpened || false)
    const [selectedFilterName, setSelectedFilterName] = useState('')
    const control = useRef()
    const title = useRef()
    const showViewAll = props.showResetControls && props.selectedValue
    const offset = control.current ? control.current.offsetTop : 0
    const handleUserClick = e => {
        if (!isOpened && title.current.contains(e.target)) {
            setIsOpened(true)
        } else if (isOpened) {
            setIsOpened(false)
        }
    }

    const handleResetItem = e => {
        e.stopPropagation()
        props.resetSelectedValue(props.filterId)
    }

    useEffect(() => {
        if (props.selectedValue && props.options.length) {
            const name = props.options.find(
                option =>
                    option &&
                    (String(option.id) === props.selectedValue ||
                        (option.name &&
                            option.name.toLowerCase() === props.selectedValue) ||
                        (option && option.ids === props.selectedValue))
            )

            setSelectedFilterName(name ? name.name : '')
        } else {
            setSelectedFilterName('')
        }
    }, [props.options, props.selectedValue])

    useEffect(() => {
        window.addEventListener('click', handleUserClick)
        return () => {
            window.removeEventListener('click', handleUserClick)
        }
    })

    return <StyledFilter>
        <StyledControlItem
            ref={control}
            isFetching={props.isFetching}
            role='option'
            tabIndex={0}
            id={`dropdown__${props.id}`}
            data-role='dropdown-filter'
        >
            <StyledButton
                kind={selectedFilterName ? 'primary' : 'secondary'}
                fullWidth
                data-testid={`selected-${selectedFilterName}`}
                ref={title}
                data-role='dropdown-value-display'
                data-opened={isOpened}
                isFilterSelected={selectedFilterName}
            >
                <StyledText isFilterSelected={!!selectedFilterName}>
                    {selectedFilterName || props.label}
                </StyledText>
                <StyledArrow isFilterSelected={!!selectedFilterName}/>
            </StyledButton>
            <StyledControlDropdown offset={offset + 45} isVisible={isOpened}>
                {showViewAll && (
                    <StyledViewAllOption
                        role='option'
                        tabIndex={0}
                        key='reset'
                        value='@@resetFilter'
                        onClick={handleResetItem}
                    >
                        View all
                    </StyledViewAllOption>
                )}
                {props.options.length ? (
                    props.options.reduce((acc, option) => {
                        if (option) {
                            const { name, id: optionId, ids } = option
                            const value = ids || String(optionId)
                            acc.push(
                                <StyledDefaultOption
                                    key={value}
                                    data-testid={`option-${value}`}
                                    role='option'
                                    tabIndex={0}
                                    bordered={false}
                                    selected={value === props.selectedValue}
                                    onClick={() =>
                                        props.handleSelectChange(props.filterId, value, option)
                                    }
                                    data-role='dropdown-option'
                                >
                                    {name}
                                    {props.showResetControls && value === props.selectedValue && (
                                        <div
                                            onClick={handleResetItem}
                                            data-testid={`cancel-${value}`}
                                        >
                                            <IoIosClose
                                                color={colors.white}
                                            />
                                        </div>
                                    )}
                                </StyledDefaultOption>
                            )
                        }
                        return acc
                    }, [])
                ) : (
                    <StyledEmptyOption>None</StyledEmptyOption>
                )}
            </StyledControlDropdown>
        </StyledControlItem>
    </StyledFilter>
}

Select.propTypes = {
    resetSelectedValue: PropTypes.func,
    /** Whether to render close icon and select all button */
    showResetControls: PropTypes.bool,
    label: PropTypes.string,
    isOpened: PropTypes.bool,
    /** Options to be passed to dropdown */
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        ids: PropTypes.any,
        onClick: PropTypes.func,
        name: PropTypes.string.isRequired
    })).isRequired,
    selectedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    handleSelectChange: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    filterId: PropTypes.string,
    id: PropTypes.string
}

Select.defaultProps = {
    showResetControls: true,
    customPlaceholder: false,
    selectedValue: '',
    isOpened: false,
    isFetching: false,
    id: ''
}

export default Select
