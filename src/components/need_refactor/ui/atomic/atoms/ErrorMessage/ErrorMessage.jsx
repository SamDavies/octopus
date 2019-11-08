import React from 'react'
import PropTypes from 'prop-types'
import StyledErrorMessage from './StyledErrorMessage'

const ErrorMessage = ({ children }) => (
    <StyledErrorMessage>{children}</StyledErrorMessage>
)

ErrorMessage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

export default ErrorMessage
