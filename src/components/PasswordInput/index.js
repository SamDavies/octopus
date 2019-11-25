import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, device, fonts } from '../../styles'
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
  top: 7px;
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
    ${({ valid }) => `background-color: ${valid ? colors.black : colors.persimmon}`};
  }
`

const PasswordInput = (props) => {
    const { placeholder, password, name, onChange, error, label } = props
    const [buttonVisible, setButtonVisible] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordButton = (password) => {
        setButtonVisible(password && !!password.length)
    }

    const togglePasswordVisibility = (e) => {
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
                label={label}
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
                    as='button'
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
    placeholder: PropTypes.string,
    /** Input label */
    label: PropTypes.string.isRequired,
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
