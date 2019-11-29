import PropTypes from 'prop-types'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import '../../src/static/css/fonts.css'
import '../../src/static/css/styles.css'

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
