import styled from 'styled-components'
import StyledText from '../../../../../atoms/Text/StyledText'
import StyledDefaultButton from '../../../../../atoms/Button/DefaultButton/StyledDefaultButton'
import { fontSizes, colors } from '../../../../../../../../styles/global-styles'
import { device } from '../../../../../../../../styles/mediaQueries'

const { white, black } = colors

export const StyledDeleteOverlay = styled.div`
  padding: 0.5rem;
  border: 0.25rem solid ${black};
  background-color: ${white};
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.desktop} {padding: 1rem}
`

export const StyledDeleteText = styled(StyledText)`
  font-size: 10px;
  text-align: center;
  margin-bottom: 1rem;
  @media ${device.desktop} {font-size: ${fontSizes.default}}
`

export const StyledDeleteButton = styled(StyledDefaultButton)`
  margin: 0 auto 0.25rem;
  line-height: 1.4;
  font-size: 10px;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  @media ${device.desktop} {font-size: ${fontSizes.default}; padding: 4px 8px;}
`

export const StyledCancelButton = styled(StyledDefaultButton)`
  border: 0;
  margin: 0 auto;
  line-height: 1;
  border-bottom: 0.15rem solid ${black};
  font-size: 10px;
  text-transform: uppercase;
  @media ${device.desktop} {
    font-size: ${fontSizes.default};
  }
`
