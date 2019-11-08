import get from 'lodash/get'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'
import Facebook from '../ui/atomic/atoms/Icons/SocialIcons/Facebook'
import Instagram from '../ui/atomic/atoms/Icons/SocialIcons/Instagram'
import Linkedin from '../ui/atomic/atoms/Icons/SocialIcons/Linkedin'
import Pinterest from '../ui/atomic/atoms/Icons/SocialIcons/Pinterest'
import Youtube from '../ui/atomic/atoms/Icons/SocialIcons/Youtube'
import TwitterIcon from '../ui/atomic/atoms/Icons/TwitterIcon'
import Logo from '../ui/atomic/atoms/Logo'
import { footerData, loggedInList, loggedOutList } from '../../config/footer'
import isTokenValid from '../../modules/auth/isTokenValid'
import { colors } from '../../styles/global-styles'
import { device } from '../../styles/mediaQueries'
import FooterListItem from './footer-parts/footer-list-item'
import TechstarsLogoImage from '../../static/images/new-design/Techstars_master_log.png'

const FooterContainer = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
`

const FooterContent = styled.div`
    padding: 60px 40px 80px;
    @media ${device.tablet} {
        padding-bottom: 160px;
    }
    @media ${device.desktop} {
        display: flex;
        justify-content: space-between;
        padding: 65px 32px 30px;
    }
`

const FooterLists = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
    }
`

const ListColumn = styled.div`
    padding: 0 10px;
    flex: 1;
    text-align: center;
    @media ${device.desktop} {
        text-align: left;
    }
`

const FooterLogo = styled.div`
  padding: 0 10px;
  align-items: center;
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 326px;
    margin-top: 0;
  margin: 0 auto;
  flex-direction: column;
   @media ${device.tablet} {
    margin-top: 30px;
  }
   @media ${device.desktop} {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
   @media ${device.desktop} {
    margin-top: 27px;
  }
`

const SocialLink = styled.a`
  margin-right: 16px;
`

const ListTitle = styled.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 2px;
  color: ${colors.white};
  margin-bottom: 10px;
  text-transform: uppercase;
`

const List = styled.ul`
  list-style: none;
  margin: 0px 0 35px 0;
  @media ${device.tablet} {
    margin-bottom: 55px;
  }
`

const TechstarsLogo = styled.img`
  width: auto;
  height: 40px;
`

const TechstarsLink = styled.a`
  text-align: center;
   @media ${device.desktop} {
    text-align: right;
  }
`

const renderFooterList = (column, openModal) => {
    const { title, list } = column
    return (
        <ListColumn key={title}>
            <ListTitle>{title}</ListTitle>
            <List>
                {list.map(item => (
                    <FooterListItem key={item.title} {...item} openModal={openModal} />
                ))}
            </List>
        </ListColumn>
    )
}

const Footer = ({ isLoggedIn, openModal }) => {
    const { account } = footerData
    account.list = isLoggedIn ? loggedInList : loggedOutList
    const data = Object.values(footerData)
    return (
        <Fragment>
            <FooterContainer>
                <FooterContent>
                    <FooterLists>
                        {data.map(list => renderFooterList(list, openModal))}
                    </FooterLists>
                    <FooterLogo>
                        <Logo color={colors.white} />
                        <Socials>
                            <SocialLink
                                href='https://www.facebook.com/stylindex/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <Facebook width='16px' height='16px' color={colors.white} />
                            </SocialLink>
                            <SocialLink
                                href='https://www.instagram.com/stylindex_'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <Instagram width='20px' height='20px' color={colors.white} />
                            </SocialLink>
                            <SocialLink
                                href='https://linkedin.com/company/stylindex'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <Linkedin width='18px' height='18px' color={colors.white} />
                            </SocialLink>
                            <SocialLink
                                href='https://www.pinterest.com/stylindex/'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <Pinterest width='18px' height='18px' color={colors.white} />
                            </SocialLink>
                            <SocialLink
                                href='https://twitter.com/stylindex'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <TwitterIcon width='18px' height='18px' color={colors.white} />
                            </SocialLink>
                            <a
                                href='https://www.youtube.com/channel/UCZKp0G7-MgDrVd2mh2NftZg'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <Youtube width='18px' height='18px' color={colors.white} />
                            </a>
                        </Socials>
                        <TechstarsLink href='https://www.techstars.com/' target='_blank'>
                            <TechstarsLogo src={TechstarsLogoImage} alt='Techstars' />
                        </TechstarsLink>
                    </FooterLogo>
                </FooterContent>
            </FooterContainer>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: isTokenValid(get(state, 'authState.accessToken', false))
})

Footer.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    openModal: PropTypes.func
}

export default compose(
    connect(
        mapStateToProps,
        null
    )
)(Footer)
