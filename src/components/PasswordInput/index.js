import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../styles/sizes'
import colors from '../../styles/colors'
import Button from '../Button'
import Input from '../Input'

export const PasswordWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
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

        <Button
            kind='ghost'
            colour='salmon'
            size='small'
            onClick={() => setPasswordVisible(!passwordVisible)}
        >
            {passwordVisible ? 'Hide' : 'Show'}
        </Button>
    </PasswordWrapper>
}

export default PasswordInput
