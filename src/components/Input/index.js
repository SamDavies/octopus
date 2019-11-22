import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, device, fonts } from '../../styles'
import ErrorMessage from '../ErrorMessage'

export const InputSection = styled.div`
  position: relative;
  text-align: left;
  width: 100%;
`

export const StyledLabel = styled.label`
  color: ${colors.black};
  font-family: ${fonts.cera};
  font-size: 13px;
  position: absolute;
  top: -3px;
  z-index: 3;
  font-weight: bold;
  min-width: 250px;
  text-transform: uppercase;

  span {
    margin-left: 2px;
    color: ${colors.scarlet};
  }

  ${({ isPlaceholder, hasValue }) => isPlaceholder && `
    top: 25px;
    color: ${colors.black};
    opacity: ${hasValue ? 0 : 0.5}; 
  `}
  
  ${({ disabled }) => disabled && `
    color: ${colors.lightGray};
  `}

  ${({ error }) => error && `
    color: ${colors.scarlet};
  `}
`

export const StyledInput = styled.input`
  padding: 11px 0;
  margin-top: 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({ error }) =>
        error ? colors.scarlet : colors.black};
  font-size: 14px;
  font-family: ${fonts.literata};
  line-height: 1.5;
  color: ${({ error }) =>
        error ? colors.scarlet : colors.black};
  min-height: 40px;
  width: 100%;
  outline: none;
  margin-bottom: 0px;
  ${device.tablet} {
    margin-bottom: 1rem
  }
  
  &::placeholder {
      text-decoration: none;
      color: ${colors.lightGray};
      font-family: ${fonts.literata};
      ${({ hideLabel }) => hideLabel && `
        opacity: 0;
      `}
    }
  

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      font-family: ${fonts.literata};
  }

  &:disabled {
    border-color: ${colors.lightGray};
    color: ${colors.lightGray};
    &::placeholder {
      color: ${colors.lightGray};
    }

  }

  ${({ fullBorder }) => fullBorder && `
    border: 3px solid ${colors.black};
  `}

  ${({ uppercase }) => uppercase && `
    text-transform: uppercase;
  `};

  &:focus {
      border-color: ${colors.lightSalmon};
  }
`

const Input = props => (
    <InputSection>
        <StyledLabel
            htmlFor={props.name}
            isPlaceholder={props.hideLabel}
            hasValue={!!props.value}
            disabled={props.disabled}
            error={props.error}
        >
            {props.label}
            {props.required ? <span>*</span> : ''}
        </StyledLabel>

        <StyledInput
            data-testid={props.name}
            name={props.name}
            id={props.name}
            type={props.type}
            ref={props.createRef}
            value={props.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            onChange={props.onChange}
            hideLabel={props.hideLabel}
            onKeyPress={props.onKeyPress}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            error={props.error && !props.disabled}
            autoComplete={props.autoComplete}
        />
        {props.error && !props.disabled && <ErrorMessage>{props.error}</ErrorMessage>}
    </InputSection>
)

Input.propTypes = {
    /** Is input disabled */
    disabled: PropTypes.bool,
    /** Does input contain invalid string or was error received from props */
    error: PropTypes.string,
    /** Input placeholder text */
    placeholder: PropTypes.string,
    /** Input label text */
    label: PropTypes.string.isRequired,
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
    /** is form required */
    required: PropTypes.bool,
    autoComplete: PropTypes.string
}

Input.defaultProps = {
    error: '',
    value: '',
    placeholder: '',
    disabled: false,
    onChange: () => { },
    createRef: { current: null },
    type: 'text',
    onKeyPress: () => { },
    onFocus: () => { },
    onBlur: () => { },
    hideLabel: false
}

export default Input
