import styled, { css } from 'styled-components'
import { paddingDesktop } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'
import StyledCoralButton from '../Button/CoralButton/StyledCoralButton'

const HeaderLoginStyles = css`
    display: none;
    @media ${device.desktop} {
        display: block;
        position: absolute !important;
        margin-bottom: 16px;
        right: ${paddingDesktop}px;
        top: 5px;
    }
`

export const StyledPrimaryButton = styled(StyledCoralButton)`
  margin: 0px auto 16px;
  ${({ isDesktopLogin }) => isDesktopLogin && HeaderLoginStyles};
  @media ${device.desktop} {
     right: ${110 + paddingDesktop}px;
  }
`
