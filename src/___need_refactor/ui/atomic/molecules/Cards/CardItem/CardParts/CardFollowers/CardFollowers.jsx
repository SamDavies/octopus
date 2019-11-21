import React from 'react'
import PropTypes from 'prop-types'
import { formatFollowers } from '../../../../../../../../utils/numberHelpers'
import InstagramIcon from '../../../../../atoms/Icons/InstagramIcon'
import TwitterIcon from '../../../../../atoms/Icons/TwitterIcon'
import {
    StyledFollowersContent,
    StyledFollowersText
} from './StyledCardFollowers'

const CardFollowers = ({ followers, type }) => (
    <StyledFollowersContent>
        {type === 'instagram' && <InstagramIcon width='18' height='18' />}
        {type === 'twitter' && <TwitterIcon width='12' height='12' />}
        <StyledFollowersText>{formatFollowers(followers)}</StyledFollowersText>
    </StyledFollowersContent>
)

CardFollowers.propTypes = {
    followers: PropTypes.number.isRequired,
    type: PropTypes.string
}
CardFollowers.defaultProps = {
    type: 'instagram'
}

export default CardFollowers
