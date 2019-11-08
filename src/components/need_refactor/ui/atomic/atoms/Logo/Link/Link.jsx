import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './StyledLink'

const Link = ({ link, children }) => (
    <StyledLink to='/' link={link.toString()}>
        {children}
    </StyledLink>
)

Link.propTypes = {
    /** Is link available */
    link: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Link
