import styled from 'styled-components'
import { device } from '../../../../styles/mediaQueries'

export const StyledStandardModal = styled.div`
  top: 0;
  margin: 0;
  padding: 0;
  height: ${({ isAutoHeight }) => (isAutoHeight ? 'auto' : '100%')};
`

export const StyledStandardModalWrapper = styled.div`
  padding-bottom: 0;
  @media${device.desktopLarge} {
    background-size: cover;
  }
`

export const StyledStandardModalContent = styled.div`
  padding: 60px 30px;
  width: 100%;
  @media ${device.tablet} {
    padding: 65px 25px
  }
`
