import styled from 'styled-components'
import { colors } from '../../'

export const TableHeader = styled.div`
    display: flex;
    background-color: ${colors.grey9};
    border-bottom: 1px solid ${colors.grey8};
    &:last-child { 
        border-bottom: none; 
    }
`

export default TableHeader
