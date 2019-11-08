import React from 'react'
import PropTypes from 'prop-types'
import StyledLogo from './StyledLogo'
import Link from './Link'
import LogoImage from './LogoImage'

// TODO: update to when we fully move to SPA

const Logo = ({ color, link, size }) => (
    <StyledLogo size={size}>
        <Link link={link}>
            <LogoImage color={color} />
        </Link>
    </StyledLogo>
)

Logo.propTypes = {
    /** Logo size */
    size: PropTypes.oneOf(['default', 'normal', 'header']),
    /** Render inverted svg icon  */
    color: PropTypes.string,
    /** Is link available */
    link: PropTypes.bool
}

Logo.defaultProps = {
    size: 'default',
    color: 'black',
    link: true
}

export default Logo
