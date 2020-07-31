import styled from 'styled-components'
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import {MediaQuery} from "../../constants/sizes";

type Props = {
    error: boolean,
    fullBorder: boolean,
    uppercase: boolean
}

export const Input = styled.input<Props>`
    padding-top: 6px;
    padding-bottom: 11px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid;
    border-bottom-color: ${({ error }) => error ? Colors.scarlet : Colors.black};
    font-size: 14px;
    font-family: ${Fonts.serif};
    line-height: 1.5;
    color: ${({ error }) => error ? Colors.scarlet : Colors.black};
    min-height: 40px;
    width: 100%;
    outline: none;
    margin-bottom: 0px;
    ${MediaQuery.tablet} {
        margin-bottom: 1rem
    }

    &::placeholder {
        text-decoration: none;
        color: ${Colors.lightGray};
        font-family: ${Fonts.serif};
    }


    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        font-family: ${Fonts.serif};
    }

    &:disabled {
    border-color: ${Colors.lightGray};
    color: ${Colors.lightGray};
    &::placeholder {
        color: ${Colors.lightGray};
    }

    }

    ${({ fullBorder }) => fullBorder && `
        margin-top: 10px;
        padding: 11px;
        border: 2px solid ${Colors.black};
    `}

    ${({ uppercase }) => uppercase && `
        text-transform: uppercase;
    `};

    &:focus {
        border-color: ${Colors.lightSalmon};
    }
`

Input.defaultProps = {
    error: false,
    fullBorder: false,
    uppercase: false
}

export default Input
