import styled from 'styled-components'
import { colors } from '../../../../../../styles/global-styles'
import StyledDefaultButton from '../DefaultButton/StyledDefaultButton'
import { device } from '../../../../../../styles/mediaQueries'

const { persimmon, black, white } = colors

export default styled(StyledDefaultButton)`
  position: relative;
  color: ${white};
  background: ${persimmon};
  border-color: ${persimmon};

  ${({ disabled }) => disabled && `
    background: ${colors.lightGray};
    border-color: ${colors.lightGray};
    
  `}

  ${({ inverse }) => inverse && `
    background: transparent;
    color: ${persimmon};
    border-width: 2px;
    @media ${device.tablet} {
        border-width: 0;
    }
  `}

  &:active {
    background: ${black};
    border-color: ${persimmon};
  }
`
