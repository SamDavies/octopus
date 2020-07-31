import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Fonts from "../../constants/fonts";
import Colors from "../../constants/colors";

type StyledErrorMessageProps = {
    size?: 'small' | 'medium' | 'large';
    level: number;
}

export const StyledErrorMessage = styled(Heading)<StyledErrorMessageProps>`
    color: ${Colors.scarlet};
`

type Props = {
    size?: 'small' | 'medium' | 'large';
}

const ErrorMessage: React.FC<Props> = props =>
    <StyledErrorMessage
        font={Fonts.serif}
        level={4}
    >
        {props.children}
    </StyledErrorMessage>

export default ErrorMessage
