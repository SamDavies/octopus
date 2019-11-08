import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../styles/global-styles'
import SvgIcon from './SvgIcon'

const CheckIcon = ({ color, width, height }) => (
    <SvgIcon width={width} height={height} color={color} />
)

CheckIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

CheckIcon.defaultProps = {
    color: colors.black,
    width: '100%',
    height: '100%'
}

export default CheckIcon
