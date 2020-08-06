import styled from 'styled-components'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'
import { MediaQuery } from '../../constants/sizes'

type Props = {
    error?: boolean;
    fullBorder?: boolean;
    uppercase?: boolean;
}

export const Input = styled.input<Props>`
    padding-top: 6px;
    padding-bottom: 11px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid;
    border-bottom-color: ${(props): string => props.error ? Color.scarlet : Color.black};
    font-size: 14px;
    font-family: ${Font.serif};
    line-height: 1.5;
    color: ${(props): string => props.error ? Color.scarlet : Color.black};
    min-height: 40px;
    width: 100%;
    outline: none;
    margin-bottom: 0px;
    ${MediaQuery.tablet} {
        margin-bottom: 1rem
    }

    &::placeholder {
        text-decoration: none;
        color: ${Color.lightGray};
        font-family: ${Font.serif};
    }


    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        font-family: ${Font.serif};
    }

    &:disabled {
    border-color: ${Color.lightGray};
    color: ${Color.lightGray};
    &::placeholder {
        color: ${Color.lightGray};
    }

    }

    ${(props): string => props.fullBorder ? `
        margin-top: 10px;
        padding: 11px;
        border: 2px solid ${Color.black};
    ` : ''}

    ${(props): string => props.uppercase ? `
        text-transform: uppercase;
    ` : ''};

    &:focus {
        border-color: ${Color.lightSalmon};
    }
`

Input.defaultProps = {
    error: false,
    fullBorder: false,
    uppercase: false
}

export default Input
