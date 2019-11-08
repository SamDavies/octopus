import React from 'react'
import PropTypes from 'prop-types'
import StyledCoralButton from './StyledCoralButton'

const CoralButton = props =>
    <StyledCoralButton {...props} />

CoralButton.propTypes = {
    /** Button content */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    /** Is text uppercased */
    uppercase: PropTypes.bool,
    /** Button size */
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    onClick: PropTypes.func,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    className: PropTypes.string
}
CoralButton.defaultProps = {
    uppercase: true,
    inverse: false,
    size: 'normal',
    onClick: () => {},
    id: '',
    className: ''
}
export default CoralButton
