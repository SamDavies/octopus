import styled from 'styled-components'
import {
    colors,
    headerMobileHeight,
    headerHeight
} from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

const { black, white } = colors

export const StyledModalHead = styled.div`
  display: none;
  @media ${device.tablet} {
    min-height: ${headerMobileHeight}px;
    width: 100%;
    background-color: ${black};
    color: ${white};
    display: flex;
    align-items: center;
    position: relative;
    padding: 30px 16px;
    margin-bottom: 30px;
  }
  @media ${device.desktop} {
    min-height: ${headerHeight}px;
  }
`

export const StyledLogoContainer = styled.div`
  max-width: 235px;
  margin: 0 auto;
`
