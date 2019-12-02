import PropTypes from 'prop-types'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { GlobalStyles } from '@stylindex/octopus'
import { theme } from 'docz'

const Theme = props =>
    <MemoryRouter>
        <GlobalStyles/>
        {props.children}
    </MemoryRouter>

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
}

export default theme()(Theme)
