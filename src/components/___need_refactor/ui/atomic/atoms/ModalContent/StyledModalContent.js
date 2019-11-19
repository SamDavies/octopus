import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

const { black, white } = colors

const StyledModalContent = styled.div`
  position: relative;
  background-color: ${white};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media ${device.tablet} {
    display: block;
    height: auto;
    margin: 0 auto 24px;
    border: solid ${black};
    border-width: ${({ thin }) => (thin ? '12px' : '24px')};
    top: ${({ thin }) => (thin ? '20px' : 'auto')};
    width: 100%;
    max-width: ${({ width }) => (width ? `${width}px !important` : '800px')};
    min-height: inherit;
  }
`

export default StyledModalContent
