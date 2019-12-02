import PropTypes from 'prop-types'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { GlobalStyles } from '@stylindex/octopus'

const Wrapper = (props) => (
    <MemoryRouter>
        <GlobalStyles/>
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
