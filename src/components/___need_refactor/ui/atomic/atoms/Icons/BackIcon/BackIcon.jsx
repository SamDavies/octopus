import React from 'react'
import PropTypes from 'prop-types'

import { colors } from '../../../../../../styles/global-styles'
import SvgIcon from './SvgIcon'

const BackIcon = ({ color, width, height, onClick }) => (
    <i role='option' tabIndex='0' onClick={onClick}>
        <SvgIcon width={width} height={height} color={color} />
    </i>
)

BackIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
    onClick: PropTypes.func,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

BackIcon.defaultProps = {
    onClick: () => {},
    color: colors.black,
    width: '100%',
    height: '100%'
}

export default BackIcon
