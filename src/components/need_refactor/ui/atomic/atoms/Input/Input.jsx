import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage'
import {
    InputSection,
    StyledInput,
    StyledLabel,
    StyledPlaceholder
} from './StyledInput'

// TODO: onPressEnter doesn't work replace it by onKeyPress

const Input = props => {
    const {
        disabled,
        error,
        placeholder,
        value,
        onChange,
        createRef,
        type,
        onKeyPress,
        onFocus,
        required,
        onBlur,
        name,
        hideLabel,
        autoComplete
    } = props
    return (
        <InputSection>
            {!hideLabel && (
                <StyledLabel htmlFor={name}>
                    {placeholder}
                    {required ? <span>*</span> : ''}
                </StyledLabel>
            )}

            {hideLabel && !value && (
                <StyledPlaceholder hideLabel={hideLabel}>
                    {placeholder}
                </StyledPlaceholder>
            )}

            <StyledInput
                data-testid={name}
                name={name}
                id={name}
                type={type}
                ref={createRef}
                value={value}
                disabled={disabled}
                onChange={onChange}
                hideLabel={hideLabel}
                onKeyPress={onKeyPress}
                onFocus={onFocus}
                onBlur={onBlur}
                error={error && !disabled}
                autoComplete={autoComplete}
            />
            {error && !disabled && <ErrorMessage>{error}</ErrorMessage>}
        </InputSection>
    )
}

Input.propTypes = {
    /** Is input disabled */
    disabled: PropTypes.bool,
    /** Does input contain invalid string or was error received from props */
    error: PropTypes.string,
    /** Input placeholder text */
    placeholder: PropTypes.string,
    /** Input value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Function that changes input value */
    onChange: PropTypes.func,
    /** Create ref function * */
    createRef: PropTypes.object,
    /** input type */
    type: PropTypes.string,
    /** onPress event callback function */
    onKeyPress: PropTypes.func,
    /** onFocus event callback function */
    onFocus: PropTypes.func,
    /** onBlur event callback function */
    onBlur: PropTypes.func,
    /** input name */
    name: PropTypes.string.isRequired,
    /** is label hidden */
    hideLabel: PropTypes.bool,
    required: PropTypes.bool,
    autoComplete: PropTypes.string
}

Input.defaultProps = {
    error: '',
    value: '',
    placeholder: '',
    disabled: false,
    onChange: () => {},
    createRef: { current: null },
    type: 'text',
    onKeyPress: () => {},
    onFocus: () => {},
    onBlur: () => {},
    hideLabel: false
}

export default Input
