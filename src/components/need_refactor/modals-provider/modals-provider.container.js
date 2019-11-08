import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import modalsIds from '../../config/modals'
import { modalHide, modalShow } from '../../redux/ui/modals'

const isModalExist = modalId => modalsIds.indexOf(modalId) !== -1

/* eslint-disable no-shadow */
const ModalsProvider = (ComponentWithModal) => {
    class WrappedModalProvider extends Component {
    openModal = (modalId) => {
        const { modalShow } = this.props
        if (isModalExist(modalId)) {
            modalShow({ id: modalId })
        }
    };

    closeModal = (modalId) => {
        const { modalHide } = this.props
        modalHide(modalId)
    };

    render () {
        return <ComponentWithModal {...this.props} openModal={this.openModal} closeModal={this.closeModal} />
    }
    }

    WrappedModalProvider.propTypes = {
        dispatch: PropTypes.func,
        activeModalId: PropTypes.string,
        modalHide: PropTypes.func,
        modalShow: PropTypes.func
    }

    WrappedModalProvider.defaultProps = {
        dispatch: f => f,
        activeModalId: ''
    }

    return connect(null, {
        modalShow,
        modalHide
    })(WrappedModalProvider)
}

export default ModalsProvider
