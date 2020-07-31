import noop from 'lodash/noop'
import React from 'react'
import styled from 'styled-components'
import Font from '../../constants/fonts'

type StyledTableCellProps = {
    flex: number | null;
    width: number | null;
    stopPropagation: boolean;
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
    flex: number | null;
    width: number | null;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    stopPropagation: boolean;
}

const TableCell: React.FC<Props> = (props: Props) => {
    const onClick = (e: React.MouseEvent<HTMLElement>): void => {
        props.stopPropagation && e.stopPropagation()
        props.onClick(e)
    }
    return <StyledTableCell
        {...props}
        onClick={onClick}
    />
}

TableCell.defaultProps = {
    flex: null,
    width: null,
    onClick: noop,
    stopPropagation: false
}

export default TableCell
