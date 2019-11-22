import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, indents, fontSizes } from '../../styles/global-styles'
import { device } from '../../styles/mediaQueries'
import media from '../../utils/styleHelpers/mediaQuery'
import StyledCoralButton from '../ui/atomic/atoms/Button/CoralButton/StyledCoralButton'
import StyledDefaultButton from '../ui/atomic/atoms/Button/DefaultButton/StyledDefaultButton'
import Text from '../ui/atomic/atoms/Text/Text'
import Heading from '../ui/atomic/atoms/Heading/StyledHeading'
import hexToRgba from '../../utils/styleHelpers/hexToRgba'
import { container } from '../../utils/styleHelpers/mixins'
import StyledCloseButton from '../ui/atomic/atoms/CloseButton/StyledCloseButton'

export const Container = styled.div`
  ${container()}
  padding: 0 ${indents.mobile}rem;
  @media ${device.tablet} {
    padding: 0 ${indents.tablet}rem;
  }
  @media ${device.desktop} {
    padding: 0 ${indents.desktop}rem;
  }
`

export const StyledPortfolio = styled.div`
  padding: 2rem 0;
  position: relative;
`

export const MediaContainer = styled(Container)`
  padding: 2rem ${indents.mobile / 2}rem;
  @media ${device.tablet} {
    padding: 2rem ${indents.tablet / 2}rem;
  }
  @media ${device.desktop} {
    padding: 2rem ${indents.desktop / 2}rem;
  }
`

// Header
export const Header = styled(Container)`
  padding-bottom: 0;
  min-height: 260px;
`

export const HeaderTitle = styled.header`
  margin-top: 2rem;
`

export const HeaderListItem = styled.p`
  padding-right: 16px;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;

  &:after {
    content: '';
    position: absolute;
    right: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.black};
    top: 50%;
    transform: translateY(-50%);
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  &:last-child {
    padding-right: 0;
    
    &::after {
      display:none;
    }
  }
`

export const ListHeading = styled(Heading)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1.5rem 0;
    @media ${device.tablet} {
      display: block;
    }
`

export const ListTitle = styled.p`
    font-size: 14px;
`

export const ListItem = styled.span`
  position: relative;
  font-size: 18px;

  &:after {
    content: '';
    position: absolute;
    right: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.black};
    top: 50%;
    transform: translateY(-50%);
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  &:last-child {
    padding-right: 0;
    
    &::after {
      display:none;
    }
  }

  @media ${device.tablet} {
      padding-right: 11px;
  }
`

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
`

// Specialities

export const SpecialityHeader = styled(Heading)`
  border-top: 2px solid ${colors.black};
  text-align: left;
  padding: 1.25rem 0 1rem;
  margin: 2rem ${indents.mobile / 2}rem 0;
  @media ${device.tablet} {
    margin: 2rem ${indents.tablet / 2}rem 0;
  }
  @media ${device.desktop} {
    margin: 2rem ${indents.desktop / 2}rem 0;
  }
`

// Navbar

export const stickyStyles = css`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: ${hexToRgba(colors.white, 0.9)};
  padding-top: ${indents.mobile}rem;
  padding-bottom: ${indents.mobile}rem;
`

export const StyledNavbar = styled(Container)`
  display: none;
  position: relative;
  width: 100%;
  background: ${colors.white};

  ${({ sticky }) => sticky && stickyStyles};

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;}
`

export const NavbarButtons = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin: 0 auto 2rem;
  flex-direction: column;
  max-width: 500px;
  @media ${device.tablet} {
    max-width: 600px;
    flex-direction: row;
  }
`

export const NavbarButtonCoral = styled(StyledCoralButton)`
  flex: 1;
  margin: .5rem 1rem;
  @media ${device.tablet} {
      margin: 0 1rem;
      max-width: 50%;
  }
`

export const NavbarButton = styled(StyledDefaultButton)`
  margin: .5rem 1rem;
  flex: 1;
  border-width: 2px;
  @media ${device.tablet} {
      margin: 0 1rem;
      max-width: 50%;


  }
`

export const StyledSpecialitySelect = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
`

export const InstagramLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

export const InstagramCounter = styled(Text)`
  margin: 0 0.5rem;
  font-size: 18px;
`

// Portfolio Item

export const ModalImageContainer = styled.div`
  height: 100%;
  max-height: 100vh;
  padding: ${indents.tablet}rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  @media ${device.tablet} {
    max-width: 600px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
    padding: ${indents.desktop}rem;
  }
  box-sizing: border-box;
`

export const ImageWrapper = styled.div`
  padding: 3rem;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  position: relative;
  border: 8px solid ${colors.black};
`

export const CloseModalButton = styled(StyledCloseButton)`
  top: -7px;
  right: -7px;
`

export const DefaultVideoPreview = styled.div`
  background: ${colors.black};
  height: 120px;
`

export const ImageFullSize = styled.img`
  max-height: 80vh;
  padding-bottom: ${indents.mobile}rem;
  @media ${device.tablet} {
    padding-bottom: ${indents.tablet}rem;
  }
  @media ${device.desktop} {
    padding-bottom: ${indents.desktop}rem;
  }
  width: auto;
`

export const CollaboratorLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.black};
  margin: 0.5rem 0;
  text-align: left;
`

export const ModalVideo = styled.video`
  max-width: 100%;
  max-height: 80%;
`

export const BackButton = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  left: ${indents.mobile}rem;
  top: ${indents.tablet}rem;
  font-size: ${fontSizes.default};
  font-weight: 500;
  line-height: 1.25;
  align-items: center;
  color: ${colors.black};
  cursor: pointer;
  @media ${device.tablet} {
    left: ${indents.tablet}rem;
    top: ${indents.tablet}rem;
  }
  @media ${device.desktop} {
    left: ${indents.desktop}rem;
    top: ${indents.desktop}rem;
  }
  
  ${media.desktopLarge`
    left: 50%;
    margin-left: -690px;
  `};

  & > span {
    margin-left: ${indents.mobile}rem;
  }
`
