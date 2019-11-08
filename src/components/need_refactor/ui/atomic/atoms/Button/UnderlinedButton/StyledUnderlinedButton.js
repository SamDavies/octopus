import styled from 'styled-components'
import { colors } from '../../../../../../styles/global-styles'
import { device } from '../../../../../../styles/mediaQueries'
import StyledDefaultButton from '../DefaultButton/StyledDefaultButton'

const bottomPosition = ({ size }) => (size === 'small' ? 0 : 5)
const bottomDesktopPosition = ({ size }) => (size === 'small' ? 2 : 5)
const lineHeight = ({ size }) => (size === 'small' ? '1px' : '0.15rem')

export default styled(StyledDefaultButton)`
  position: relative;
  padding: 0.35rem;
  color: ${colors.black};
  background: ${colors.white};
  cursor: pointer;
  border: none;

  &:after {
    content: '';
    height: ${lineHeight};
    background: ${colors.black};
    position: absolute;
    bottom: ${bottomPosition}px;
    left: 0px;
    right: 0;
    width: auto;
    display: inline-block;
    @media ${device.desktop} {
      bottom: ${bottomDesktopPosition}px;
    }
  }
  &:focus {
    box-shadow: none;
    color: ${colors.black};
    background: ${colors.turquoiseBright};
  }
`
