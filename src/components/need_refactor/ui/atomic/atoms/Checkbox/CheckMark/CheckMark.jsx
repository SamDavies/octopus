import React from 'react'
import PropTypes from 'prop-types'
import StyledCheckMark from './StyledCheckMark'

const CheckMark = ({ type }) => <StyledCheckMark type={type} />

CheckMark.propTypes = {
    type: PropTypes.string.isRequired
}

export default CheckMark
