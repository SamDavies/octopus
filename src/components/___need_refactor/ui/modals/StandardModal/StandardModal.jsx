import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../atomic/molecules/Modal'
import CloseButton from '../../atomic/atoms/CloseButton'
import ModalHeadLogo from '../../atomic/atoms/ModalHeadLogo'
import ModalContent from '../../atomic/atoms/ModalContent'
import {
    StyledStandardModal,
    StyledStandardModalWrapper,
    StyledStandardModalContent
} from './StyledStandardModal'

const StandardModal = ({ visible, onCancel, children, isAutoHeight }) => (
    <Modal visible={visible}>
        <StyledStandardModal isAutoHeight={isAutoHeight}>
            <StyledStandardModalWrapper>
                <ModalHeadLogo />
                <ModalContent>
                    <StyledStandardModalContent>
                        {onCancel && <CloseButton onClick={onCancel} />}
                        {children}
                    </StyledStandardModalContent>
                </ModalContent>
            </StyledStandardModalWrapper>
        </StyledStandardModal>
    </Modal>
)

StandardModal.defaultProps = {
    onCancel: null,
    isAutoHeight: false
}

StandardModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    isAutoHeight: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default StandardModal
