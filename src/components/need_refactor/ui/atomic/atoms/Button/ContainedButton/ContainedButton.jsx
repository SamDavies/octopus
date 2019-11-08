import React from 'react'
import PropTypes from 'prop-types'
import StyledContainedButton from './StyledContainedButton'

const ContainedButton = ({
    children,
    size,
    uppercase,
    onClick,
    fullWidth,
    type
}) => (
    <StyledContainedButton
        fullWidth={fullWidth}
        size={size}
        uppercase={uppercase}
        onClick={onClick}
        type={type}
    >
        {children}
    </StyledContainedButton>
)
ContainedButton.propTypes = {
    /** Button content */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    /** Button size */
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    /** Is text uppercased */
    uppercase: PropTypes.bool,
    /** on click callback */
    onClick: PropTypes.func,
    /** show full width button */
    fullWidth: PropTypes.bool,
    /** button type */
    type: PropTypes.string
}
ContainedButton.defaultProps = {
    size: 'normal',
    type: 'button',
    uppercase: true,
    onClick: () => {},
    fullWidth: false
}
export default ContainedButton
