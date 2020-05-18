import styled from 'styled-components'
import colours from '../../constants/colours'

export const TableHeader = styled.div`
    display: flex;
    border-bottom: 2px solid ${colours.black};
    &:last-child { 
        border-bottom: none; 
    }
`

export default TableHeader
