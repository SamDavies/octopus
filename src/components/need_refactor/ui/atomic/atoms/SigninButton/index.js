import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledButton } from './styles'

const SigninButton = ({ isDesktopLogin }) =>
    <Link
        to={{
            pathname: '/account/login',
            // this is the trick!
            state: { modal: true }
        }}>
        <StyledButton
            id='sign-in-button'
            size='large'
            uppercase
            inverted={false}
            isDesktopLogin={isDesktopLogin}
        >
            Sign In
        </StyledButton>
    </Link>

SigninButton.propTypes = {
    menuActive: PropTypes.bool.isRequired,
    isDesktopLogin: PropTypes.bool
}

SigninButton.defaultProps = {
    /** Is desktop login */
    isDesktopLogin: false
}

export default connect(
    state => ({
        menuActive: state.header.ui.menuActive
    }),
    null
)(SigninButton)
