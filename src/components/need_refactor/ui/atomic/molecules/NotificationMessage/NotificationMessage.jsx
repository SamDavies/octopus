import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../Icon'
import StyledNotificationMessage from './StyledNotificationMessage'
import MessageText from './MessageText'

// FIXME: replace icon with atomic icon component

const NotificationMessage = ({ text }) => (
    <StyledNotificationMessage>
        <Icon type='icon_check_white' />
        <MessageText inverted>{text}</MessageText>
    </StyledNotificationMessage>
)

NotificationMessage.propTypes = {
    text: PropTypes.string.isRequired
}

export default NotificationMessage
