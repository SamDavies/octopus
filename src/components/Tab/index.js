import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const StyledContainer = styled.div`
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.black};
    ${props => props.direction !== 'VERTICAL' && `
        &:not(:last-child) {
            padding-right: 30px;
        }
    `};
    cursor: pointer;
`

const StyledTab = styled.div`
    ${props => props.direction === 'VERTICAL' && `
        border-left: 2px solid ${props.isSelected ? colors.black : 'transparent'};
        padding-left: 12px;
        margin-bottom: 20px;
        &:hover {
            border-left: 2px solid ${colors.salmon};
        }
    `};

    ${props => props.direction !== 'VERTICAL' && `
        padding-bottom: 12px;
        border-bottom: 2px solid ${props.isSelected ? colors.black : 'transparent'};
        &:hover {
            border-bottom: 2px solid ${colors.salmon};
        }
    `};
`

const Tab = props =>
    <StyledContainer {...props}>
        <StyledTab {...props} />
    </StyledContainer>

export default Tab
