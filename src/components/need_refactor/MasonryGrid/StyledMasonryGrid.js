import styled from 'styled-components'
import { colors, indents } from '../../styles/global-styles'
import { device } from '../../styles/mediaQueries'

const itemMargin = styled.div`
  margin: ${indents.mobile / 2}rem;
  @media ${device.tablet} {
    margin: ${indents.tablet / 2}rem;
  } @media ${device.desktop} {
    margin: ${indents.desktop / 2}rem;
  }
`

export const MasonryItem = styled(itemMargin)`
  cursor: pointer;
  position: relative;
`

export const LoadMore = styled(itemMargin)`
  background: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadMoreButton = styled.button`
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${colors.white};
  height: 220px;
  width: 100%;
  cursor: pointer;
`
