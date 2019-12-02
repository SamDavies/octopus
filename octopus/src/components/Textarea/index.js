import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, device, fonts } from '../../constants'
import ErrorMessage from '../ErrorMessage'
import StyledText from '../Text'

const TextareaContainer = styled.div`
  display: block;
`

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 7.5rem;
  margin-bottom: 0.5rem;
  padding: 20px;
  border: 2px solid;
  ${({ error }) => `
    margin-bottom: ${error ? '0' : '0.5rem'};
    border-color: ${error ? colors.scarlet : colors.black};
  `}
  font-family: ${fonts.literata};
  font-size: 14px;
  line-height: 20px;
  color: ${colors.black};
  background-color: ${colors.white};
  resize: none;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  transition: all 0.15s ease-in;
  @media ${device.tablet} {height: 120px}
  &::placeholder {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.5);
    font-family: ${fonts.literata};
    text-transform: uppercase;
  }
  &:focus {
      border-color: ${colors.lightSalmon};
    //   box-shadow: 0 0 0 4px ${colors.aqua};
      outline: none;
  }
  &:disabled {
      color: ${colors.cloud};
      border-color: ${colors.cloud};
  }
`

const Remaining = styled.div`
  display: flex;
  align-items: center;
`

const RemainingCounter = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  font-family: ${fonts.cera};
  font-size: 0.8rem;
`
const RemainingText = styled(StyledText)`
  margin: 0;
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
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
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
