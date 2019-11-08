import React from 'react'
import PropTypes from 'prop-types'

import StyledText from './StyledText'

const Text = ({
    children,
    size,
    bold,
    underline,
    inverted,
    uppercase,
    ...props
}) => (
    <StyledText
        {...props}
        uppercase={uppercase}
        size={size}
        bold={bold}
        underline={underline}
        inverted={inverted}
    >
        {children}
    </StyledText>
)

Text.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large', 'extraLarge']),
    bold: PropTypes.bool,
    inverted: PropTypes.bool,
    uppercase: PropTypes.bool,
    underline: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

Text.defaultProps = {
    size: 'normal',
    bold: false,
    underline: false,
    inverted: false,
    uppercase: false
}

export default Text
