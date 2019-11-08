import React from 'react'
import Scrollchor from 'react-scrollchor'
import PropTypes from 'prop-types'
import { scrollDuration } from '../../../../../config/global-constants'

const Anchor = ({ href, children }) => (
    <Scrollchor to={href} animate={{ scrollDuration }}>
        {children}
    </Scrollchor>
)

Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Anchor
