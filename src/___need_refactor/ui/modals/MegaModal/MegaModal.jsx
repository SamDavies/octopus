import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../atomic/molecules/Modal'
import Logo from '../../atomic/atoms/Logo'
import CloseButton from '../../atomic/atoms/CloseButton'
import { colors } from '../../../../styles/global-styles'

import {
    StyledModalHead,
    StyledLogoContainer,
    StyledModalContent
} from './StyledMegaModal'

const MegaModal = ({ visible, onCancel, children }) => (
    <Modal visible={visible} onCancel={onCancel} transparent={false}>
        <StyledModalHead>
            <StyledLogoContainer>
                <Logo color={colors.white} />
            </StyledLogoContainer>
            <CloseButton onClick={onCancel} inverted />
        </StyledModalHead>
        <StyledModalContent>{children}</StyledModalContent>
    </Modal>
)

MegaModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default MegaModal
