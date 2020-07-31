import styled from 'styled-components'
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

type Props = {
    error: boolean
    disabled: boolean
}

const Label = styled.label<Props>`
    margin-top: 20px;
    color: ${Colors.black};
    font-family: ${Fonts.sanSerif};
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;

    ${({ disabled }) => disabled && `
        color: ${Colors.lightGray};
    `}

    ${({ error }) => error && `
        color: ${Colors.scarlet};
    `}
`

Label.defaultProps = {
    error: false,
    disabled: false
}

export default Label
