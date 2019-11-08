import styled from 'styled-components'
import { colors } from '../../styles/global-styles'
import { device } from '../../styles/mediaQueries'
import StyledHeading from '../ui/atomic/atoms/Heading/StyledHeading'
import StyledText from '../ui/atomic/atoms/Text/StyledText'
import { StyledModalContainer } from '../ui/StaticModalLayout/StyledStaticModalLayout'

const { black, white } = colors

export const StyledAbout = styled(StyledModalContainer)`
  padding: 65px 0px 80px 0px;
  @media ${device.tablet} {padding: 65px 0px 120px 0px;}
  @media ${device.desktop} {padding: 65px 0px 200px 0px;}
`

export const StyledAboutWindow = styled.div`
  width: 100%;
  border-top: 8px solid ${black};
  border-bottom: 8px solid ${black};
  background: ${white};
  padding: 35px 0px 60px 0px;
  @media ${device.tablet} {border: 16px solid ${black};}
  @media ${device.desktop} {
    width: 736px;
    margin: 0 auto;
    border: 24px solid ${black};
    padding: 50px 0px 60px 0px;
  }
`

export const StyledAboutSection = styled.div`
  width: 100%;
  border-width: 16px;
  padding: 0px 20px;
  margin-bottom: 50px;
  @media ${device.desktop} {padding: 0px 50px;}
`

export const StyledFaqList = styled.div`
  padding: 0px;
  @media ${device.tablet} {padding: 0px 15px;}
  @media ${device.desktop} {padding: 0px 30px;}
`

export const StyledAboutHeading = styled(StyledHeading)`
  margin-bottom: 20px;
  line-height: 1.67;
  letter-spacing: 16px;
`

export const StyledAboutText = styled(StyledText)`
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
`

export const StyledAboutLink = styled.a`
  text-decoration: none;
  position: relative;
  padding: 0px 2px;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${black};
  }
`
