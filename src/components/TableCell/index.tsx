import noop from 'lodash/noop'
import React from 'react'
import styled from 'styled-components'
import Font from '../../constants/fonts'

type StyledTableCellProps = {
    flex?: number;
    width?: number;
}

const StyledTableCell = styled.div<StyledTableCellProps>`
    ${(props): string => props.flex ? `
        flex: ${props.flex};
    ` : ''}
    ${(props): string => props.width ? `
        width: ${props.width};
    ` : ''}
    min-width: 0;
    overflow-y: auto;
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 8px;
    font-family: ${Font.sanSerif};
    font-size: 14px;
    display: flex;
    align-items: center;
`

type Props = {
    flex?: number;
    width?: number;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    stopPropagation?: boolean;
}

const TableCell: React.FC<Props> = (
    {
        flex,
        width,
        onClick = noop,
        stopPropagation = false
    }: Props
) => {
    const handleOnClick = (e: React.MouseEvent<HTMLElement>): void => {
        stopPropagation && e.stopPropagation()
        onClick(e)
    }
    return <StyledTableCell
        flex={flex}
        width={width}
        onClick={handleOnClick}
    />
}

export default TableCell
