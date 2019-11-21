import React from 'react'
import PropTypes from 'prop-types'
import StyledLabel from './StyledLabel'

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>

Label.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default Label
