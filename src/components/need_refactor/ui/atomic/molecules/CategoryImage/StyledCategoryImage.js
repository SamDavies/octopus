import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../../../../styles/mediaQueries'
import { colors } from '../../../../../styles/global-styles'
import { centerAbs } from '../../../../../utils/styleHelpers/mixins'

const { black, white } = colors

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StyledLink = styled(Link)`
  ${centerAbs()};
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 3px;
  text-align: center;
  color: ${white};
  text-transform: uppercase;
  z-index: 9;
  padding: 0.35rem;
  text-decoration: none;
  @media ${device.tablet} {font-size: 22px;}
  @media ${device.desktop} {font-size: 48px;}

  &:hover {
    color: ${black};
    text-decoration: none;
  }
`

export const StyledCategoryImage = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  background-color: ${white};
`
