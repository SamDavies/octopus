import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledPrimaryButton } from './styles'

const SignupButton = ({ isDesktopLogin }) =>
    <Link
        to={{
            pathname: '/account/create',
            // this is the trick!
            state: { modal: true }
        }}>
        <StyledPrimaryButton
            size='large'
            uppercase
            isDesktopLogin={isDesktopLogin}
            id='sign-up-button'
        >
            Sign Up
        </StyledPrimaryButton>
    </Link>

SignupButton.propTypes = {
    menuActive: PropTypes.bool.isRequired,
    isDesktopLogin: PropTypes.bool
}

SignupButton.defaultProps = {
    /** Is desktop login */
    isDesktopLogin: false
}

export default connect(
    state => ({
        menuActive: state.header.ui.menuActive
    }),
    null
)(SignupButton)
