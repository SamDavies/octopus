import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../../styles/global-styles'
import SvgIcon from './SvgIcon'

const Facebook = ({ color, width, height, type }) => (
    <SvgIcon width={width} height={height} color={color} type={type} />
)

Facebook.propTypes = {
    /** icon color */
    color: PropTypes.string,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string,
    /** icon type */
    type: PropTypes.string
}

Facebook.defaultProps = {
    color: colors.black,
    width: '100%',
    height: '100%',
    type: 'box'
}

export default Facebook
