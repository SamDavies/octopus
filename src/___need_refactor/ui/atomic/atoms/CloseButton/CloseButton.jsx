import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../styles/global-styles'
import CloseIcon from '../Icons/CloseIcon'
import StyledCloseButton from './StyledCloseButton'

const CloseButton = ({ onClick, inverted, position }) => (
    <StyledCloseButton
        onClick={onClick}
        inverted={inverted}
        position={position}
    >
        <CloseIcon width='16' height='16' color={inverted ? colors.white : colors.black} />
    </StyledCloseButton>
)

CloseButton.defaultProps = {
    inverted: false,
    position: 'right'
}

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    inverted: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right'])
}

export default CloseButton
