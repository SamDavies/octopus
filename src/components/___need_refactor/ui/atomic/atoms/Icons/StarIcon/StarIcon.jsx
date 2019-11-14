import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../styles/global-styles'
import { StyledIcon } from './StyledStarIcon'
import SvgIcon from './SvgIcon'

const StarIcon = ({ color, borderColor, onClick, width, height }) => (
    <StyledIcon role='option' tabIndex='0' onClick={onClick}>
        <SvgIcon
            width={width}
            height={height}
            color={color}
            borderColor={borderColor}
        />
    </StyledIcon>
)

StarIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
    /** border color */
    borderColor: PropTypes.string,
    /** on icon click callback */
    onClick: PropTypes.func,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

StarIcon.defaultProps = {
    color: colors.white,
    borderColor: colors.black,
    onClick: () => {},
    width: '100%',
    height: '100%'
}

export default StarIcon
