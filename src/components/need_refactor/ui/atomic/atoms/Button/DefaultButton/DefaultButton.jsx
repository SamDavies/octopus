import PropTypes from 'prop-types'
import React from 'react'
import StyledDefaultButton from './StyledDefaultButton'

const DefaultButton = props =>
    <StyledDefaultButton
        {...props}
    />

DefaultButton.propTypes = {
    /** Button type */
    type: PropTypes.string,
    /** Button content */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    /** Button size */
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    /** Click callback function */
    onClick: PropTypes.func,
    /** Is button text uppercased */
    uppercase: PropTypes.bool,
    /** Is button disabled */
    disabled: PropTypes.bool,
    /** Is button styles inverted */
    inverted: PropTypes.bool,
    /** Button id */
    id: PropTypes.string,
    /** Button class name */
    className: PropTypes.string
}
DefaultButton.defaultProps = {
    type: 'button',
    size: 'normal',
    disabled: false,
    onClick: () => {},
    inverted: false,
    uppercase: true,
    className: '',
    id: ''
}
export default DefaultButton
