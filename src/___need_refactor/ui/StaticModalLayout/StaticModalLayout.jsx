import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledModalContainer,
    StyledModalContent
} from './StyledStaticModalLayout'

const StaticModalLayout = ({ children, isSmallModal }) => (
    <StyledModalContainer isSmallModal={isSmallModal}>
        <StyledModalContent>{children}</StyledModalContent>
    </StyledModalContainer>
)

StaticModalLayout.propTypes = {
    /** children component */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    /** Defines if modal has small content */
    isSmallModal: PropTypes.bool
}

StaticModalLayout.defaultProps = {
    isSmallModal: false
}

export default StaticModalLayout
