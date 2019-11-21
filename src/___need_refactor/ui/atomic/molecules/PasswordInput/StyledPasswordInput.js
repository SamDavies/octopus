import styled from 'styled-components'
import { device } from '../../../../../styles/mediaQueries'
import { normalText } from '../../../../../utils/styleHelpers/mixins'
import { colors } from '../../../../../styles/global-styles'

const { black, white, persimmon } = colors

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const TogglePasswordVisibility = styled.button`
  ${normalText} position: absolute;
  right: 0.25rem;
  top: 7px;
  height: 28px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  color: ${white};
  padding: 0;
  width: 60px;
  display: inline-block;
  background: ${black};
  margin-top: 8px;
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
  color: ${black};
  text-transform: uppercase;
  margin-bottom: 8px;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${persimmon};
    margin-right: 4px;
    ${({ valid }) => `background-color: ${valid ? black : persimmon}`};
  }
`
