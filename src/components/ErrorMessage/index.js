import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import colours from '../../constants/colours'

export const StyledErrorMessage = styled(Heading)`
    color: ${colours.scarlet};
`

const ErrorMessage = props =>
    <StyledErrorMessage
        font='literata'
        level={6}
    >
        {props.children}
    </StyledErrorMessage>

ErrorMessage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

export default ErrorMessage
