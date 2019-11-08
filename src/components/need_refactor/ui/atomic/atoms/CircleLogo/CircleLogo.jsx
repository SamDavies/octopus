import React from 'react'
import PropTypes from 'prop-types'

import { imagesPath } from '../../../../../styles/global-styles'
import { StyledLogo } from './StyledCircleLogo'

const CircleLogo = ({ maxWidth, onClick }) => (
    <StyledLogo
        onClick={onClick}
        maxWidth={maxWidth}
        src={`${imagesPath}/STYLiNDEX-black-circle-trans-bg.png`}
        alt='Stylindex'
    />
)

CircleLogo.propTypes = {
    /** max logo width */
    maxWidth: PropTypes.string,
    onClick: PropTypes.func
}

CircleLogo.defaultProps = {
    maxWidth: '60px',
    onClick: () => {}
}
export default CircleLogo
