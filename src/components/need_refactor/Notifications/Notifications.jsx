import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { selectNotifications, notificationHide } from '../../redux/ui/notifications'
import Notification from '../ui/atomic/molecules/Notification'

const StyledContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 110;
`

/* eslint-disable no-shadow */
const Notifications = ({ notifications: { visible, text }, notificationHide }) => (
    <StyledContainer>
        {visible && <Notification text={text} onCancel={notificationHide} />}
    </StyledContainer>
)

Notifications.propTypes = {
    notifications: PropTypes.shape({
        visible: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    notificationHide: PropTypes.func.isRequired
}

export default connect(state => ({
    notifications: selectNotifications(state)
}), { notificationHide })(Notifications)
