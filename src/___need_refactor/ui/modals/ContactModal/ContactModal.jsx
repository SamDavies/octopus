import React from 'react'
import PropTypes from 'prop-types'
import { ChildNodesPropType } from '../../../../config/prop-types'
import Modal from '../../atomic/molecules/Modal'
import CloseButton from '../../atomic/atoms/CloseButton'

import StyledContactModalContent from './StyledContactModal'

const ContactModal = ({ visible, onCancel, children, width }) => (
    <Modal visible={visible} width={width}>
        <StyledContactModalContent>
            <CloseButton onClick={onCancel} />
            {children}
        </StyledContactModalContent>
    </Modal>
)

ContactModal.defaultProps = {
    onCancel: () => {}
}

ContactModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    children: ChildNodesPropType.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default ContactModal
