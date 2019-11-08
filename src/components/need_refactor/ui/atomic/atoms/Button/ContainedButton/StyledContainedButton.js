import styled from 'styled-components'
import { colors, fonts } from '../../../../../../styles/global-styles'
import StyledDefaultButton from '../DefaultButton/StyledDefaultButton'

export default styled(StyledDefaultButton)`
  font-family: ${fonts.primary};
  font-weight: 500;
  letter-spacing: 0.4px;
  background-color: ${colors.black};
  color: ${colors.white};

  &:focus {
    background: ${colors.black};
    color: ${colors.white};
  }

  &:hover,
  &:active {
    color: ${colors.white};
    background-color: ${colors.black};
  }
`
