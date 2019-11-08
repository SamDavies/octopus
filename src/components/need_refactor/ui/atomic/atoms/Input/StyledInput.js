import styled from 'styled-components'
import { colors, fonts } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

export const InputSection = styled.div`
  position: relative;
  text-align: left;
  width: 100%;
`

export const StyledLabel = styled.label`
  color: ${colors.black};
  font-size: 12px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  position: absolute;
  top: -20px;
  z-index: 3;
  font-weight: bold;
  min-width: 250px;
  margin-top: 20px;
  text-transform: uppercase;

  span {
    margin-left: 2px;
    color: red;
  }
`

export const StyledInput = styled.input`
  margin-top: 10px;
  padding: ${({ hideLabel }) => hideLabel ? '0 8px' : '0 2px'};
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({ error }) =>
        error ? colors.brightRed : colors.black};
  font-size: 12px;
  font-weight: bold;
  font-family: ${fonts.miller};
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${colors.black};
  min-height: 40px;
  width: 100%;
  outline: none;
  transition: all 0.15s ease-in;
  margin-bottom: 0px;
  ${device.tablet} {
    margin-bottom: 1rem
  }
 
  &::placeholder {
    text-decoration: none;
    font-weight: 600;
    color: ${colors.black};
    font-family: ${fonts.primary};
    opacity: 0.5;
    text-transform: uppercase;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      font-family: ${fonts.miller};
  }

  &:disabled {
    border-bottom: none;
    background-image: linear-gradient(to right, black 33%, rgba(255, 255, 255, 0) 0%);
    background-position: bottom;
    background-size: 4px 1px;
    background-repeat: repeat-x;
    &::placeholder {
      color: ${colors.black};
      text-decoration: line-through;
    }
  }

  ${({ fullBorder }) => fullBorder && `
    border: 3px solid ${colors.black};
  `}

  ${({ uppercase }) => uppercase && `
    text-transform: uppercase;
  `};
`

export const StyledPlaceholder = styled.div`
  position: absolute;
  text-decoration: none;
  font-weight: 600;
  color: ${colors.black};
  font-family: ${fonts.primary};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  top: 50%;
  line-height: 0;
  left: ${({ hideLabel }) => hideLabel ? '7px' : '0px'};
  margin-top: -6px;
  pointer-events: none;

  span {
    color: red;
  }
`
