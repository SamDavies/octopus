import PropTypes from 'prop-types'
import React from 'react'
import { childrenPropType } from '../../../../config/prop-types'
import Modal from '../../atomic/molecules/Modal'
import { StyledInvisibleModal, StyledInvisibleModalContent, StyledInvisibleModalWrapper } from './styles'

const InvisibleModal = ({ visible, onCancel, children, isAutoHeight, width }) => (
    <Modal visible={visible}>
        <StyledInvisibleModal isAutoHeight={isAutoHeight}>
            <StyledInvisibleModalWrapper>
                <StyledInvisibleModalContent>
                    {children}
                </StyledInvisibleModalContent>
            </StyledInvisibleModalWrapper>
        </StyledInvisibleModal>
    </Modal>
)

InvisibleModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    children: childrenPropType,
    isAutoHeight: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

InvisibleModal.defaultProps = {
    title: ''
}

export default InvisibleModal
