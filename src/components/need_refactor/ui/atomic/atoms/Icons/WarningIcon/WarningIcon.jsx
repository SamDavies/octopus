import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../styles/global-styles'
import SvgIcon from './SvgIcon'

const WarningIcon = ({ color, width, height }) => (
    <SvgIcon width={width} height={height} color={color} />
)

WarningIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

WarningIcon.defaultProps = {
    color: colors.brightRed,
    width: '100%',
    height: '100%'
}

export default WarningIcon
