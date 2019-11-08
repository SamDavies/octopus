import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage'

import {
    TextareaContainer,
    StyledTextarea,
    Remaining,
    RemainingCounter,
    RemainingText
} from './StyledTextarea'

const Textarea = ({
    value,
    onChange,
    placeholder,
    id,
    name,
    maxLength,
    error,
    disabled
}) => (
    <TextareaContainer>
        <StyledTextarea
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}
            error={error && !disabled}
        />
        {error && !disabled && <ErrorMessage>{error}</ErrorMessage>}
        {maxLength && (
            <Remaining>
                <RemainingCounter>{maxLength - value.length}</RemainingCounter>
                <RemainingText uppercase size='small'>
          characters remaining
                </RemainingText>
            </Remaining>
        )}
    </TextareaContainer>
)

Textarea.propTypes = {
    /** textarea value */
    value: PropTypes.string,
    /** textarea change calllback */
    onChange: PropTypes.func.isRequired,
    /** placeholder text */
    placeholder: PropTypes.string,
    /** textarea max-length value */
    maxLength: PropTypes.number,
    /** unic id */
    id: PropTypes.string.isRequired,
    /** textarea name */
    name: PropTypes.string.isRequired,
    /** Error message */
    error: PropTypes.string,
    /** Is textarea disabled */
    disabled: PropTypes.bool
}

Textarea.defaultProps = {
    placeholder: '',
    value: '',
    maxLength: null,
    error: '',
    disabled: false
}

export default Textarea
