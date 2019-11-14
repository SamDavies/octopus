import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import StyledInput from './Input/StyledInput'
import StyledCheckMark from './CheckMark/StyledCheckMark'

export default styled.div`
  position: relative;
  display: block;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')}

  &:hover {
    ${StyledInput}:not(:checked):not(:disabled) ~ ${StyledCheckMark} {
      box-shadow: 0 0 0 2px ${colors.turquoiseBright};
    }
  }
`
