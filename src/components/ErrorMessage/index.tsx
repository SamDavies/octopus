import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import colors from '../../constants/colors'

type Props = {
    inverted: boolean
    size: 'small' | 'medium' | 'large'
}

export const StyledErrorMessage = styled(Heading)`
    color: ${colors.scarlet};
`

const ErrorMessage: React.FC<Props> = props =>
    <StyledErrorMessage
        font='literata'
        level={6}
    >
        {props.children}
    </StyledErrorMessage>

export default ErrorMessage
