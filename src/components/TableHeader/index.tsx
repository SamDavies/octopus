import styled from 'styled-components'
import colors from '../../constants/colors'

export const TableHeader = styled.div`
    display: flex;
    border-bottom: 2px solid ${colors.black};
    &:last-child { 
        border-bottom: none; 
    }
`

export default TableHeader
