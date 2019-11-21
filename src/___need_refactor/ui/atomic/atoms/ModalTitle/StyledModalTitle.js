import styled from 'styled-components'
import { device } from '../../../../../styles/mediaQueries'

const StyledModalTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6;
  padding: 23px 8px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0 0.5rem;
    height: 64px;
  }
`

export default StyledModalTitle
