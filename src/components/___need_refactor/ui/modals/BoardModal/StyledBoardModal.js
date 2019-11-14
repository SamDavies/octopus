import styled from 'styled-components'
import { device } from '../../../../styles/mediaQueries'

const StyledBoardModalWrapper = styled.div`
  width: 100%;
  padding: 0 24px 24px;
  @media ${device.tablet} {padding: 24px}
`

export default StyledBoardModalWrapper
