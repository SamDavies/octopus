import styled from 'styled-components'
import colors from '../../constants/colors'

export const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid ${colors.grey8};
    &:last-child { 
        border-bottom: none; 
    }
    
    &:hover {
        background-color: ${colors.grey10}
    }
    
    ${props => props.onClick && `
        cursor: pointer;
    `}
`

export default TableRow
