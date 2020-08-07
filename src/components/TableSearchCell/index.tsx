import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import styled from 'styled-components'
import Font from '../../constants/fonts'

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
    flex?: number;
    width?: number;
}

export const StyledTableSearchCell = styled.div<StyledTableSearchCellProps>`
    ${(props): string => props.flex ? `
        flex: ${props.flex};
    ` : ''}
    ${(props): string => props.width ? `
        width: ${props.width};
    ` : ''}
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
`

type Props = {
    flex?: number;
    width?: number;
    value: string | (readonly string[] & string);
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string | (readonly string[] & string);
}

const TableSearchCell: React.FC<Props> = (
    props: Props
) =>
    <StyledTableSearchCell
        flex={props.flex}
        width={props.width}
    >
        <IoIosSearch/>
        <StyledInput
            {...props}
        />
    </StyledTableSearchCell>

export default TableSearchCell
