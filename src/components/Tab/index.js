import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    padding-right: 30px;
    cursor: pointer;
`

const StyledTab = styled.div`
    padding-bottom: 12px;
    ${props => props.isSelected && `
        border-bottom: 2px solid black;
    `};
`

const Tab = props =>
    <StyledContainer {...props}>
        <StyledTab {...props} />
    </StyledContainer>

export default Tab
