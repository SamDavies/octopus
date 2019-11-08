import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectIsModalActive } from '../../../../../redux/ui/modals'
import { ChildNodesPropType } from '../../../../../config/prop-types'
import ModalsProvider from '../../../../modals-provider'
import { StyledModalWrapper, StyledModal } from './StyledModal'

class Modal extends Component {
    componentDidUpdate () {
    // const { visible, activeModalId } = this.props;
    // if (visible !== prevProps.visible && !prevProps.visible) {
    //   document.body.style.overflow = 'hidden';
    // }
    // if (activeModalId !== prevProps.activeModalId && activeModalId === '') {
    //   document.body.removeAttribute('style');
    // }
        if (this.props.modalActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.removeAttribute('style')
        }
    }

    render () {
        const { visible, transparent, children, width, height } = this.props
        return visible ? (
            <StyledModalWrapper transparent={transparent}>
                <StyledModal width={width} height={height}>{children}</StyledModal>
            </StyledModalWrapper>
        ) : null
    }
}

Modal.defaultProps = {
    transparent: true,
    height: 'auto'
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    transparent: PropTypes.bool,
    children: ChildNodesPropType.isRequired,
    modalActive: PropTypes.bool.isRequired,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default ModalsProvider(connect(state => ({
    modalActive: selectIsModalActive(state)
}))(Modal))
