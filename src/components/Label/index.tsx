import styled from 'styled-components'
import Color from "../../constants/colors";
import Font from "../../constants/fonts";

type Props = {
    error: boolean
    disabled: boolean
}

const Label = styled.label<Props>`
    margin-top: 20px;
    color: ${Color.black};
    font-family: ${Font.sanSerif};
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;

    ${({ disabled }) => disabled && `
        color: ${Color.lightGray};
    `}

    ${({ error }) => error && `
        color: ${Color.scarlet};
    `}
`

Label.defaultProps = {
    error: false,
    disabled: false
}

export default Label
