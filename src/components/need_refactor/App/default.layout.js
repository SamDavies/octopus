import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import MenuContentLayout from '../../modules/layout/components/MenuContentLayout'
import MenuLayout from '../../modules/layout/components/MenuLayout'
import Header from '../../modules/navigation/containers/Header'
import SideMenu from '../../modules/navigation/containers/SideMenu'

const DefaultLayout = ({ component: Component, mobileMenuVisible, reducedSlide, ...rest }) => (
    <Fragment>
        <Header />

        <MenuLayout>
            <SideMenu />
            <MenuContentLayout>
                <Route {...rest} render={matchProps => <Component {...matchProps} />} />
            </MenuContentLayout>
        </MenuLayout>
    </Fragment>
)

DefaultLayout.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    mobileMenuVisible: PropTypes.bool,
    reducedSlide: PropTypes.any
}

export default DefaultLayout
