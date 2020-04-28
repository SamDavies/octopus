import React from 'react'
import styled from 'styled-components'
import { colors } from '../..'

const StyledContainer = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.black};
    &:not(:last-child) {
        padding-right: 30px;
    }
    cursor: pointer;
`

const StyledTab = styled.div`
    padding-bottom: 12px;
    border-bottom: 2px solid ${props => props.isSelected ? colors.black : 'transparent'};
`

const Tab = props =>
    <StyledContainer {...props}>
        <StyledTab {...props} />
    </StyledContainer>

export default Tab
