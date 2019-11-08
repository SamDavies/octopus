import styled from 'styled-components'
import { fonts, colors } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

const { black } = colors

export const EmojiCell = styled.div`
  flex: 1;
  text-align: center;
  &:after {
    display: block;
    content: '${({ plan }) => plan}';
    font-family: ${fonts.primary};
    font-size: 0.7rem;
    font-weight: 500;
    color: ${black};
    text-transform: uppercase;
    margin-top: 0.35rem;
    @media ${device.tablet} {display: none}
  }
`

export const StyledEmoji = styled.img`
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
`
