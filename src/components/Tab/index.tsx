import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

type Props = {
    direction?: 'HORIZONTAL' | 'VERTICAL';
    isSelected?: boolean;
    children?: ReactNode;
}

const StyledContainer = styled.div<Props>`
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.black};
    ${(props): string => props.direction !== 'VERTICAL' ? `
        &:not(:last-child) {
            padding-right: 30px;
        }
    ` : ''};
    cursor: pointer;
`

const StyledTab = styled.div<Props>`
    ${(props): string => props.direction === 'VERTICAL' ? `
        border-left: 2px solid ${props.isSelected ? colors.black : 'transparent'};
        padding-left: 12px;
        margin-bottom: 20px;
        &:hover {
            border-left: 2px solid ${colors.salmon};
        }
    ` : ''};

    ${(props): string => props.direction !== 'VERTICAL' ? `
        padding-bottom: 12px;
        border-bottom: 2px solid ${props.isSelected ? colors.black : 'transparent'};
        &:hover {
            border-bottom: 2px solid ${colors.salmon};
        }
    ` : ''};
`

const Tab: React.FC<Props> = (
    {
        direction = 'HORIZONTAL',
        isSelected = false,
        children
    }: Props
) =>
    <StyledContainer
        direction={direction}
        isSelected={isSelected}
    >
        <StyledTab
            direction={direction}
            isSelected={isSelected}
        >
            {children}
        </StyledTab>
    </StyledContainer>

export default Tab
