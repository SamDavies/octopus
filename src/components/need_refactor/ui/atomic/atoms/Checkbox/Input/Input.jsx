import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './StyledInput'

const Input = ({ type, id, name, value, disabled, checked, onChange }) => (
    <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
    />
)

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    disabled: false,
    checked: false
}

export default Input
