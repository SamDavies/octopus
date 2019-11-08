import styled from 'styled-components'
import { device } from '../../../styles/mediaQueries'
import { colors, fonts } from '../../../styles/global-styles'

export const CategoriesListItem = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  background-color: ${colors.white};

  @media ${device.tablet} {
    width: 33.33%;
  }

  ${({ isAuthenticated }) => isAuthenticated && `
      @media${device.tablet} {
        width: 100% !important;
        display: flex;
        flex-flow: row wrap;
      }
    `
};
`

export const CategoriesListItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ${({ isAuthenticated }) => isAuthenticated && `
    align-items: center;
  `}

  ${({ isAuthenticated }) => isAuthenticated && `
    @media ${device.desktop} {
      width: 50%;
      display: flex;
      max-height: 320px;
      justify-content: center;
      align-items: flex-start;
    }
  `};

  ${({ index }) => ((index % 2)) && `
    @media ${device.desktop} {
      order: 2;
    }
  `}
  
`

export const CategoriesListItemTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  z-index: 9;
  padding: 5px;
  text-decoration: none;

  a {
    color: ${colors.white};
  }

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.desktop} {
    font-size: 48px;
  }

  &:hover {
    a {
      color: ${colors.black};
      text-decoration: none;
    }
  }

  ${({ isAuthenticated }) => isAuthenticated && `
      display: none !important;
    `
};
`

export const CategoriesListItemText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  text-align: center;
  width: 100%;
  margin-bottom: 25px;

  @media ${device.desktop} {
    width: 50%;
    margin-bottom: 25px;
  }
`

export const CategoriesListItemHeader = styled.div`
  position: relative;
  font-size: 32px;
  text-transform: uppercase;
  padding: 15px 0;
  margin-bottom: 25px;
  font-weight: 500;
  
  &::after {
    content: "";
    position: absolute;
    width: 75px;
    height: 3px;
    background: ${colors.black};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const CategoriesListItemBody = styled.div`
  font-family: ${fonts.miller};
  font-size: 18px;
  padding: 0 50px;
  max-width: 620px;
  letter-spacing: 0.3px;

  @media ${device.desktop} {
     padding: 0 75px;
  }
`

export const CategoriesListItemCta = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 25px;
`
