import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../styles/global-styles'
import SvgIcon from './SvgIcon'

const AddIcon = ({ color, width, height }) => (
    <SvgIcon width={width} height={height} color={color} />
)

AddIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

AddIcon.defaultProps = {
    color: colors.white,
    width: '100%',
    height: '100%'
}

export default AddIcon