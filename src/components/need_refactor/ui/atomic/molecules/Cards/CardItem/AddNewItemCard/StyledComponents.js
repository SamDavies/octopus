import styled from 'styled-components'
import { colors } from '../../../../../../../styles/global-styles'
import { device } from '../../../../../../../styles/mediaQueries'
import { centerAbs, square } from '../../../../../../../utils/styleHelpers/mixins'
import { Link } from 'react-router-dom'

const { white, black } = colors

export const StyledIconHolder = styled.span`
  ${centerAbs()};
`

export const StyledIcon = styled.div`
  width: 80px;
  height: auto;
  transition: 0.3s;
  @media ${device.tablet} {width: 5rem;}
`

export const StyledAddNewItem = styled(Link)`
  ${square()};
  background: ${black};
  color: ${white};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  width: 100%;

  &:hover ${StyledIcon} {
    transform: rotate(90deg);
    transition: 0.3s;
  }
`
