import styled from 'styled-components'
import { colors } from '../../../../../../../../styles/global-styles'
import Icon from '../../../../../../Icon'
// FIX: replace with atomic icon

export const StyledIcon = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 9;
  cursor: pointer;
`

export const StyledImage = styled.span`
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 9;
  width: 2rem;
  height: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  color: ${colors.white};
  line-height: 2rem;
  border-radius: 50%;
  border: solid 2px ${colors.white};
  background: ${colors.persimmon};
  background-position: 50% 50%;
  background-size: cover;
  text-transform: uppercase;
`
