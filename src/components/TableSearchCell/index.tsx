import noop from 'lodash/noop'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import styled from 'styled-components'
import Font from "../../constants/fonts";

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    height: 100%;
    font-size: 14px;
    font-family: ${Font.sanSerif};
    padding-top: 12px;
    padding-left: 4px;
    padding-bottom: 8px;
    background-color: transparent;
    font-weight: 600;
    outline: none;
`

type StyledTableSearchCellProps = {
    flex: number | null,
    width: number | null,
}

export const StyledTableSearchCell = styled.div<StyledTableSearchCellProps>`
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

type Props = {
    flex: number | null,
    width: number | null,
    value: string | (readonly string[] & string),
    onChange: (e: React.ChangeEvent<HTMLElement>) => void;
    placeholder: string | (readonly string[] & string);
}

const TableSearchCell: React.FC<Props> = (props: Props) =>
    <StyledTableSearchCell
        flex={props.flex}
        width={props.width}
    >
        <IoIosSearch />
        <StyledInput
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </StyledTableSearchCell>

TableSearchCell.defaultProps = {
    flex: null,
    width: null,
    value: '',
    onChange: noop,
    placeholder: ''
}

export default TableSearchCell
