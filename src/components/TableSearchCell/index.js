import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import fonts from '../../constants/fonts'
import Icon from '../Icon'

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    height: 100%;
    font-size: 14px;
    font-family: ${fonts.cera};
    padding-top: 12px;
    padding-left: 4px;
    padding-bottom: 8px;
    background-color: transparent;
    font-weight: 600;
    outline: none;
`

export const StyledTableSearchCell = styled.div`
    ${props => props.flex && `
        flex: ${props.flex};
    `}
    ${props => props.width && `
        width: ${props.width};
    `}
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
`

const TableSearchCell = props =>
    <StyledTableSearchCell {...props}>
        <Icon fillColor='grey5' icon='search' width={15} height={15} />
        <StyledInput
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </StyledTableSearchCell>

TableSearchCell.propTypes = {
    flex: PropTypes.number,
    width: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

TableSearchCell.defaultProps = {
    flex: null,
    width: null,
    value: '',
    onChange: noop,
    placeholder: ''
}

export default TableSearchCell
