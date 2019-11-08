import React from 'react'
import PropTypes from 'prop-types'
import { ChildNodesPropType } from '../../../../config/prop-types'
import Modal from '../../../ui/atomic/molecules/Modal'
import CloseButton from '../../../ui/atomic/atoms/CloseButton'
import ModalContent from '../../../ui/atomic/atoms/ModalContent'
import ModalTitle from '../../../ui/atomic/atoms/ModalTitle'

import StyledBoardModalWrapper from './StyledBoardModal'

const BoardModal = ({ children, visible, onCancel, title }) => (
    <Modal visible={visible}>
        <ModalContent thin>
            <StyledBoardModalWrapper>
                {title && <ModalTitle title={title} />}
                <CloseButton onClick={onCancel} />
                {children}
            </StyledBoardModalWrapper>
        </ModalContent>
    </Modal>
)

BoardModal.defaultProps = {
    title: '',
    onCancel: () => {}
}

BoardModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    title: PropTypes.string,
    children: ChildNodesPropType
}

BoardModal.defaultProps = {
    children: null
}

export default BoardModal
