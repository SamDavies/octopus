import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../styles/sizes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import Input from '../Input'
import { StyledLink } from '../Link'

export const PasswordWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const TogglePasswordVisibility = styled(StyledLink)`
    color: inherit;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    font-family: ${fonts.cora};
    position: absolute;
    right: 0.25rem;
    bottom: 7px;
    height: 28px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    line-height: 24px;
    padding: 0;
    width: 60px;
    display: inline-block;
    margin-top: 13px;
    outline: none;
`

export const ValidatePasswordLabels = styled.div`
    column-count: 1;
    width: 100%;
    margin-bottom: 40px;
    text-align: left;
    @media ${device.desktop} {
        column-count: 2;
    }
`

export const ValidateTitle = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 11px;
    font-weight: bold;
    line-height: 1.45;
    color: ${colors.black};
    text-transform: uppercase;
    margin-bottom: 8px;
    
    &:before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: ${colors.coral};
        margin-right: 4px;
        ${({ valid }) => `background-color: ${valid ? colors.black : colors.coral}`};
    }
`

const PasswordInput = (props) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return <PasswordWrapper>
        <Input
            {...props}
            type={passwordVisible ? 'text' : 'password'}
        />

        <TogglePasswordVisibility
            as='button'
            type='button'
            className='noFocus'
            onClick={() => setPasswordVisible(!passwordVisible)}
        >
            {passwordVisible ? 'Hide' : 'Show'}
        </TogglePasswordVisibility>
    </PasswordWrapper>
}

export default PasswordInput
