import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './StyledComponents'

const PageHeading = ({ children }) => (
    <Title level={2} uppercase='true'>
        {children}
    </Title>
)

PageHeading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default PageHeading
