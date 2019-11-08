import React from 'react'
import PropTypes from 'prop-types'
import CardFollowers from '../CardFollowers'

import styled from 'styled-components'
import { fonts, colors } from '../../../../../../../../styles/global-styles'

const { black, white } = colors

const StyledCardFooter = styled.div`
  font-family: ${fonts.secondary};
  color: ${black};
  background: ${white};
  height: 75px;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px 6px;
`

export const StyledFooterTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.23;
  color: ${black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 5px;
`

const StyledFooterSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 8px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 0.53px;
  color: ${black};
  text-transform: uppercase;
`

const StyledFooterText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardFooter = ({ subTitle, title, followers, type }) => (
    <StyledCardFooter>
        <StyledFooterSubTitle>
            <StyledFooterText>{subTitle}</StyledFooterText>
        </StyledFooterSubTitle>
        <StyledFooterTitle>{title}</StyledFooterTitle>
        {followers > 0 && <CardFollowers followers={followers} type={type} />}
    </StyledCardFooter>
)

CardFooter.propTypes = {
    /** card footer subtitle text */
    subTitle: PropTypes.string,
    /** card footer title text */
    title: PropTypes.string,
    /** followers count */
    followers: PropTypes.number,
    /** followers type */
    type: PropTypes.string
}

CardFooter.defaultProps = {
    subTitle: '',
    title: '',
    followers: 0,
    type: ''
}

export default CardFooter
