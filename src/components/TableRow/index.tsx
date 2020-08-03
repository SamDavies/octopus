import styled from 'styled-components'
import Color from '../../constants/colors'

export const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid ${Color.grey8};
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: ${Color.grey10}
    }

    ${(props): string => props.onClick ? `
        cursor: pointer;
    ` : ''}
`

export default TableRow
