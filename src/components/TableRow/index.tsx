import styled from 'styled-components'
import Colors from '../../constants/colors'

export const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid ${Colors.grey8};
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: ${Colors.grey10}
    }

    ${props => props.onClick && `
        cursor: pointer;
    `}
`

export default TableRow
