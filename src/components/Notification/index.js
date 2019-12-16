import PropTypes from 'prop-types'
import React from 'react'
// import errorIcon from '../../static/images/ui/notifications/error.svg'
// import successIcon from '../../static/images/ui/notifications/success.svg'
import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import Icon from '../Icon'
import { StyledText } from '../Text'
// import CloseNotificationMessage from './CloseNotificationMessage'

const NotificationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.black};
    padding: 5px 25px;
    max-width: 400px;
    line-height: 15px;
    min-height: 50px;
    font-family: ${fonts.cera};

    .icon-wrapper {
        padding: 5px;
        display: inherit;
        align-items: center;
        justify-content: center;
        background: ${({ background }) => colors[background]};
        border-radius: 100%;

    }
`

const NotificationText = styled(StyledText).attrs(() => ({
    color: 'white',
    size: 'normal',
    bold: true,
    uppercase: true,
    font: 'cera'
}))`
    margin: 0 0 0 8px;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 1px;
    overflow-wrap: break-word;

`

const notificationIcons = {
    success: {
        icon: 'check',
        background: 'kiwi'
    },
    warning: {
        icon: 'warning',
        fillColor: 'black',
        background: 'lemon'
    },
    error: {
        icon: 'close',
        background: 'scarlet',
        fillColor: 'white'
    }
}

const Notification = (props) => {
    const data = notificationIcons[props.type]

    return (
        <NotificationContainer background={data.background}>
            <Icon icon={data.icon} fillColor={data.fillColor || 'white'} height={13} width={13} />
            <NotificationText>{props.text}</NotificationText>
        </NotificationContainer>
    )
}

Notification.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default Notification
