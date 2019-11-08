import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../atomic/molecules/Modal'
import CloseButton from '../../atomic/atoms/CloseButton'
import ModalContent from '../../atomic/atoms/ModalContent'
import {
    StyledMinimalModal,
    StyledMinimalModalWrapper,
    StyledMinimalModalContent
} from './styles'

const MinimalModal = ({
    visible,
    onCancel,
    children,
    padding,
    isAutoHeight,
    width
}) => (
    <Modal visible={visible}>
        <StyledMinimalModal isAutoHeight={isAutoHeight}>
            <StyledMinimalModalWrapper>
                <ModalContent thin width={width}>
                    <StyledMinimalModalContent padding={padding}>
                        {onCancel && <CloseButton onClick={onCancel} />}
                        {children}
                    </StyledMinimalModalContent>
                </ModalContent>
            </StyledMinimalModalWrapper>
        </StyledMinimalModal>
    </Modal>
)

MinimalModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    title: PropTypes.string,
    padding: PropTypes.object,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isAutoHeight: PropTypes.bool
}

MinimalModal.defaultProps = {
    title: '',
    width: '600',
    padding: {
        mobile: '30',
        tablet: '50'
    }
}

export default MinimalModal
