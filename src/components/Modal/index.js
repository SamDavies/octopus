import PropTypes from 'prop-types'
import React from 'react'
import ModalComponent from './ModalComponent'

const Modal = ({ visible, ...modalProps }) => visible
    ? <ModalComponent {...modalProps} /> : null

Modal.propTypes = {
    visible: PropTypes.bool
}

Modal.defaultProps = {
    visible: false
}

export default Modal
