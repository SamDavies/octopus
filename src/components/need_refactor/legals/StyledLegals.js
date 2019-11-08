import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'
import media from '../../utils/styleHelpers/mediaQuery'
import { colors, imagesPath } from '../../styles/global-styles'

export const Container = styled.div`
    background-image: url(${imagesPath}/BG_long.svg);
    background-repeat: no-repeat;
    background-position: 0px -102px;
    padding: 65px 0px 80px 0px;
    @media ${device.tablet} {
        padding-bottom: 120px;
    }
    @media ${device.desktop} {
        padding-bottom: 200px;
    }
    ${media.desktopLarge`
        background-size: 100%;
    `}
`

export const ModalContent = styled.div`
  width: 100%;
  border-top: 8px solid ${colors.black};
  border-bottom: 8px solid ${colors.black};
  background: ${colors.white};
  padding: 35px 16px;
  @media ${device.tablet} {
        border: 16px solid ${colors.black};
    } @media ${device.desktop} {
        width: 736px;
        margin: 0 auto;
        border: 24px solid ${colors.black};
        padding: 50px 30px;
    }
`
