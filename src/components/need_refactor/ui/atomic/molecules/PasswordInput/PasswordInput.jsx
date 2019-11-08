import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../../atoms/Input'

import {
    PasswordWrapper,
    TogglePasswordVisibility
} from './StyledPasswordInput'

const PasswordInput = (props) => {
    const { placeholder, password, name, onChange, error } = props
    const [buttonVisible, setButtonVisible] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordButton = (password) => {
        setButtonVisible(password && !!password.length)
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <PasswordWrapper>
            <Input
                name={name}
                id={name}
                type={passwordVisible ? 'text' : 'password'}
                onChange={onChange}
                value={password}
                placeholder={placeholder}
                error={error}
                hideLabel
                onFocus={() => {
                    togglePasswordButton(password)
                }}
                onBlur={e => {
                    togglePasswordButton(password, e)
                }}
            />

            {buttonVisible && (
                <TogglePasswordVisibility
                    type='button'
                    className='noFocus'
                    onClick={togglePasswordVisibility}
                >
                    {passwordVisible ? 'Hide' : 'Show'}
                </TogglePasswordVisibility>
            )}
        </PasswordWrapper>
    )
}

PasswordInput.propTypes = {
    /** Input name */
    name: PropTypes.string.isRequired,
    /** Input placeholder */
    placeholder: PropTypes.string.isRequired,
    /** Password value */
    password: PropTypes.string.isRequired,
    /** Function that handles password change */
    onChange: PropTypes.func.isRequired,
    /** Error message about input value */
    error: PropTypes.string
}

PasswordInput.defaultProps = {
    error: ''
}

export default PasswordInput
