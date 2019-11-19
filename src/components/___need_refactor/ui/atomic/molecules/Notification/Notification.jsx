import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '../../atoms/Icons/CloseIcon'
import WarningIcon from '../../atoms/Icons/WarningIcon'
import Text from '../../atoms/Text'
import {
    StyledNotification,
    Content,
    MessageContent,
    Warning,
    Button
} from './StyledNotification'

const Notification = ({ text, isWarning, onCancel }) => (
    <StyledNotification>
        <Content>
            {isWarning && (
                <Warning>
                    <WarningIcon width='24' height='24' />
                </Warning>
            )}
            <MessageContent>
                <Text size='large'>{text}</Text>
                <Button onClick={onCancel}>
                    <CloseIcon width='8' height='8' />
                </Button>
            </MessageContent>
        </Content>
    </StyledNotification>
)

Notification.propTypes = {
    text: PropTypes.string.isRequired,
    isWarning: PropTypes.bool,
    onCancel: PropTypes.func.isRequired
}

Notification.defaultProps = {
    /** Is warning notification */
    isWarning: false
}

export default Notification
