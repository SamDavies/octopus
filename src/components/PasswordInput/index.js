import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'

export const PasswordWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
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
