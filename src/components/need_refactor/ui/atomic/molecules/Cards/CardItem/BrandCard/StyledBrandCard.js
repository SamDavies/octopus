import styled from 'styled-components'
import { colors } from '../../../../../../../styles/global-styles'

export const StyledBrandCard = styled.a`
  border: 4px solid ${colors.black};
  position: relative;
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const StyledImage = styled.img`
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
`
