/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'

import StyledCheckbox from './StyledCheckbox'
import Input from './Input'
import Label from './Label'
import CheckMark from './CheckMark'

const CheckBox = ({
    onChange,
    type,
    children,
    disabled,
    checked,
    uppercase,
    id,
    name,
    value
}) => (
    <StyledCheckbox type={type} checked={checked} uppercase={uppercase}>
        <label htmlFor={id || name}>
            <Input
                type={type}
                id={id || name}
                name={name}
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <Label>{children}</Label>
            <CheckMark type={type} />
        </label>
    </StyledCheckbox>
)

CheckBox.propTypes = {
    /** Checkbox type */
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    /** Checkbox content */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** Is checkbox disabled */
    disabled: PropTypes.bool,
    /** Is checkbox checked */
    checked: PropTypes.bool,
    /** Is checkbox uppercase */
    uppercase: PropTypes.bool,
    /** On input change callback */
    onChange: PropTypes.func.isRequired,
    /** Input id */
    id: PropTypes.string,
    /** Input name */
    name: PropTypes.string.isRequired,
    /** Input value */
    value: PropTypes.string
}

CheckBox.defaultProps = {
    id: '',
    value: '',
    disabled: false,
    checked: false,
    uppercase: false
}

export default CheckBox
