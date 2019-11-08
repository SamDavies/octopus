import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import StaticHeader from '../../modules/navigation/containers/Header/StaticHeader'

const StaticLayout = ({ component: Component, ...rest }) => (
    <Fragment>
        <StaticHeader />
        <Route {...rest} render={matchProps => <Component {...matchProps} />} />
    </Fragment>
)

StaticLayout.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.func
    ]).isRequired
}

export default StaticLayout
