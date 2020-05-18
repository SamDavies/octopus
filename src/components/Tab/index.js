import React from 'react'
import styled from 'styled-components'
import colours from '../../constants/colours'

const StyledContainer = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    color: ${colours.black};
    &:not(:last-child) {
        padding-right: 30px;
    }
    cursor: pointer;
`

const StyledTab = styled.div`
    padding-bottom: 12px;
    border-bottom: 2px solid ${props => props.isSelected ? colours.black : 'transparent'};
    
    &:hover {
        border-bottom: 2px solid ${colours.salmon};
    }
`

const Tab = props =>
    <StyledContainer {...props}>
        <StyledTab {...props} />
    </StyledContainer>

export default Tab
