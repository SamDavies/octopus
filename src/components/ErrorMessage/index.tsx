import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Font from '../../constants/fonts'
import Color from '../../constants/colors'

type StyledErrorMessageProps = {
    size?: 'small' | 'medium' | 'large';
    level: number;
}

export const StyledErrorMessage = styled(Heading)<StyledErrorMessageProps>`
    color: ${Color.scarlet};
`

type Props = {
    size?: 'small' | 'medium' | 'large';
}

const ErrorMessage: React.FC<Props> = (props: PropsWithChildren<Props>) =>
    <StyledErrorMessage
        font={Font.serif}
        level={4}
    >
        {props.children}
    </StyledErrorMessage>

export default ErrorMessage
