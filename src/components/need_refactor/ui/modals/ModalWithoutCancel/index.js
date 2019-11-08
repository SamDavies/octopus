import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../atomic/molecules/Modal'
import ModalContent from '../../atomic/atoms/ModalContent'
import {
    StyledMinimalModal,
    StyledMinimalModalWrapper,
    StyledMinimalModalContent
} from './styles'

const ModalWithoutCancel = ({ visible, children, isAutoHeight, width }) => (
    <Modal visible={visible}>
        <StyledMinimalModal isAutoHeight={isAutoHeight}>
            <StyledMinimalModalWrapper>
                <ModalContent thin width={width}>
                    <StyledMinimalModalContent>
                        {children}
                    </StyledMinimalModalContent>
                </ModalContent>
            </StyledMinimalModalWrapper>
        </StyledMinimalModal>
    </Modal>
)

ModalWithoutCancel.propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isAutoHeight: PropTypes.bool
}

ModalWithoutCancel.defaultProps = {
    title: ''
}

export default ModalWithoutCancel
