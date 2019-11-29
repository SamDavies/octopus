import styled from 'styled-components'

import { imagesPath } from '../../../config/global-constants'
import { colors } from '../../../styles/global-styles'
import { device } from '../../../styles/mediaQueries'
import media from '../../../utils/styleHelpers/mediaQuery'

const { black, white } = colors

export const StyledModalContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 5rem 0 7rem;
  background-image: url(${imagesPath}backgrounds/BG_short.svg);
  background-repeat: no-repeat;
  background-position: 0px -102px;
  @media ${device.tablet} {
    height: ${({ isSmallModal }) => (isSmallModal ? '100%' : 'auto')}
  }
  ${media.desktopLarge`
    background-size: cover;
  `};
`

export const StyledModalContent = styled.div`
  display: flex;
  border: 0.5rem solid ${black};
  border-left-width: 0;
  border-right-width: 0;
  width: 100%;
  background-color: ${white};
  padding: 1rem;
  margin: auto;
  @media ${device.tablet} {
    border-width: 0.5rem;
  }
  @media ${device.desktop} {
    border-width: 1rem;
    max-width: 640px;
  }
`
