import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'
import Colors from "../../constants/colors";

export const PasswordWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`

type Props = {
    error: boolean,
    fullBorder: boolean,
    uppercase: boolean
}

const PasswordInput = (props: Props) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return <PasswordWrapper>
        <Input
            {...props}
            type={passwordVisible ? 'text' : 'password'}
        />

        <Button
            kind='ghost'
            color={Colors.salmon}
            size='small'
            onClick={() => setPasswordVisible(!passwordVisible)}
        >
            {passwordVisible ? 'Hide' : 'Show'}
        </Button>
    </PasswordWrapper>
}

export default PasswordInput
