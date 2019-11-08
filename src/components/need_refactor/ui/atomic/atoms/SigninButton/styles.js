import styled, { css } from 'styled-components'
import { paddingDesktop } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'
import StyledDefaultButton from '../Button/DefaultButton/StyledDefaultButton'

const HeaderLoginStyles = css`
  display: none;
  @media ${device.desktop} {
     display: block;
    position: absolute;
    margin-bottom: 16px;
    right: ${paddingDesktop}px;
    top: 5px;
  }
`

export const StyledButton = styled(StyledDefaultButton)`
  margin: 0px auto 16px;
  ${({ isDesktopLogin }) => isDesktopLogin && HeaderLoginStyles};
`
