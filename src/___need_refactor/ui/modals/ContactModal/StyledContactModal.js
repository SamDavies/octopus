import styled from 'styled-components'
import { device } from '../../../../styles/mediaQueries'
import { colors } from '../../../../styles/global-styles'

const { black, white } = colors

const StyledContactModalContent = styled.div`
  position: relative;
  width: 100%;
  padding: 3rem;
  background-color: ${white};
  border: 8px solid ${black};
  @media ${device.tablet} {
    width: 90%;
    max-width: 700px;
    margin: auto;
  }
`

export default StyledContactModalContent
