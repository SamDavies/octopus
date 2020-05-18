import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colours from '../../constants/colours'
import { device } from '../../constants/sizes'
import AbstractText from '../AbstractText'
import ErrorMessage from '../ErrorMessage'
import Text from '../Text'

const TextareaContainer = styled.div`
  display: block;
`

const StyledTextarea = styled.textarea`
    ${AbstractText}
    font-size: 16px;
    width: 100%;
    min-height: 100px;
    padding: 20px;
    border: 2px solid;
    ${({ error }) => `
        border-color: ${error ? colours.scarlet : colours.black};
    `}
    color: ${colours.black};
    background-color: ${colours.white};
    resize: none;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    transition: all 0.15s ease-in;
    @media ${device.tablet} {height: 120px}
    &::placeholder {
        color: ${colours.lightGray};
    }
    &:focus {
        border-color: ${colours.lightSalmon};
        outline: none;
    }
    &:disabled {
        color: ${colours.cloud};
        border-color: ${colours.cloud};
    }
`

const Remaining = styled.div`
    display: flex;
    align-items: center;
`

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
            font='literata'
            spacing='normal'
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            error={error && !disabled}
        />
        {error && !disabled && <ErrorMessage>
            {error}
        </ErrorMessage>}
        {maxLength && (
            <Remaining>
                <Text size='small'>
                    {maxLength - value.length} characters remaining
                </Text>
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
    /** uniq id */
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
