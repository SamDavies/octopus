import React from 'react'
import PropTypes from 'prop-types'
import StyledUnderlinedButton from './StyledUnderlinedButton'

const UnderlinedButton = ({ children, size, uppercase, onClick }) => (
    <StyledUnderlinedButton size={size} uppercase={uppercase} onClick={onClick}>
        {children}
    </StyledUnderlinedButton>
)
UnderlinedButton.propTypes = {
    /** Button content */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    /** Is text uppercased */
    uppercase: PropTypes.bool,
    /** Button size */
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    onClick: PropTypes.func
}
UnderlinedButton.defaultProps = {
    uppercase: true,
    size: 'normal',
    onClick: () => {}
}
export default UnderlinedButton
