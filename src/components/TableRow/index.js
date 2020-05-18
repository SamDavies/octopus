import styled from 'styled-components'
import colours from '../../constants/colours'

export const TableRow = styled.div`
    display: flex;
    border-bottom: 1px solid ${colours.grey8};
    &:last-child { 
        border-bottom: none; 
    }
    
    &:hover {
        background-color: ${colours.grey10}
    }
    
    ${props => props.onClick && `
        cursor: pointer;
    `}
`

export default TableRow
