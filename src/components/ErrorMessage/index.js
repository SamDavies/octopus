import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import colors from '../../../old/src/styles/colors'

export const StyledErrorMessage = styled(Heading)`
    color: ${colors.scarlet};
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
