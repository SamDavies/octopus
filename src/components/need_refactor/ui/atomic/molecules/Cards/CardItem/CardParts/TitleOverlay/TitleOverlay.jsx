import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './StyledTitleOverlay'

const TitleOverlay = ({ title, isVisible }) =>
    isVisible && (
        <StyledText uppercase bold>
            {title}
        </StyledText>
    )

TitleOverlay.propTypes = {
    /** Overlay title text */
    title: PropTypes.string.isRequired,
    /** is CardTitleOverlay visible */
    isVisible: PropTypes.bool.isRequired
}

export default TitleOverlay
