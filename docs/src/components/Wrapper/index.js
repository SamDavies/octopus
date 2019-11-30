import PropTypes from 'prop-types'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

const Wrapper = (props) => (
    <MemoryRouter>
        {props.children}
    </MemoryRouter>
)

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
}

export default Wrapper
