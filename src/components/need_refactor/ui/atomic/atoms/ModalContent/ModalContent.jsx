import React from 'react'
import PropTypes from 'prop-types'
import { ChildNodesPropType } from '../../../../../config/prop-types'
import StyledModalContent from './StyledModalContent'

const ModalContent = ({ thin, children, width }) => (
    <StyledModalContent thin={thin} width={width}>{children}</StyledModalContent>
)

ModalContent.defaultProps = {
    thin: false,
    width: '600'
}

ModalContent.propTypes = {
    thin: PropTypes.bool,
    width: PropTypes.string,
    children: ChildNodesPropType.isRequired
}

export default ModalContent
