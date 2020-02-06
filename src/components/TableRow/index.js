import styled from 'styled-components'
import { colors } from '../../styles'

export const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid ${colors.grey8};
    &:last-child { 
        border-bottom: none; 
    }
    
    ${props => props.onClick && `
        cursor: pointer;
        &:hover {
            background-color: ${colors.grey10}
        }
    `}
`

export default TableRow
