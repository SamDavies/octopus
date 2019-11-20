import PropTypes from 'prop-types'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import '../../public/public/fonts.css'
import '../../public/public/styles.css'

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
