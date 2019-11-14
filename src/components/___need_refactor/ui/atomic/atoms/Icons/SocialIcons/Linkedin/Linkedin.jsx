import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../../styles/global-styles'
import SvgIcon from './SvgIcon'

const Linkedin = ({ color, width, height }) => (
    <SvgIcon width={width} height={height} color={color} />
)

Linkedin.propTypes = {
    /** icon color */
    color: PropTypes.string,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

Linkedin.defaultProps = {
    color: colors.black,
    width: '100%',
    height: '100%'
}

export default Linkedin
