import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../styles'

const StyledTableCell = styled.div`
    ${props => props.flex && `
        flex: ${props.flex}
    `}
    ${props => props.width && `
        width: ${props.width}
    `}
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 8px;
    font-family: ${fonts.cera};
    font-size: 14px;
    display: flex;
    align-items: center;
`

const TableCell = props => {
    const onClick = e => {
        e.stopPropagation()
        props.onClick(e)
    }
    return <StyledTableCell
        {...props}
        onClick={onClick}
    />
}

TableCell.propTypes = {
    flex: PropTypes.number,
    width: PropTypes.number,
    onClick: PropTypes.func
}

TableCell.defaultProps = {
    flex: null,
    width: null,
    onClick: noop
}

export default TableCell
