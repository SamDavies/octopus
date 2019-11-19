import React from 'react'
import PropTypes from 'prop-types'
import StyledModalTitle from './StyledModalTitle'

const ModalTitle = ({ title }) => <StyledModalTitle>{title}</StyledModalTitle>

ModalTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default ModalTitle
