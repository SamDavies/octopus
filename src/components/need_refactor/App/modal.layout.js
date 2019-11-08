import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import ModalsProvider from '../modals-provider'
import Header from '../../modules/navigation/containers/Header'

class ModalLayout extends Component {
    componentDidMount () {
        this.props.openModal(this.props.modal)
    }

    render () {
        const { component: WrappedComponent, ...rest } = this.props
        return (
            <div>
                <Header />
                <Route
                    {...rest}
                    render={matchProps => <WrappedComponent {...matchProps} />}
                />
            </div>
        )
    }
}

ModalLayout.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    openModal: PropTypes.func.isRequired,
    modal: PropTypes.string.isRequired
}

export default ModalsProvider(ModalLayout)
