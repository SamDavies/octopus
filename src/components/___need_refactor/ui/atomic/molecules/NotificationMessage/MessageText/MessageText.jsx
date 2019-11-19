import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageText from './StyledMessageText'

const MessageText = ({ children, inverted }) => (
    <StyledMessageText inverted={inverted}>{children}</StyledMessageText>
)

MessageText.propTypes = {
    inverted: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

export default MessageText
