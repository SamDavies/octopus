import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

const { black } = colors

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${black};
  padding: 1rem;

  @media ${device.tablet} {flex-direction: row}

  &:first-child {
    display: none;
    @media ${device.tablet} {display: flex}
  }
`
