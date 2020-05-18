import PropTypes from 'prop-types'
import styled from 'styled-components'
import {device} from '../../constants/sizes'
import colours from '../../constants/colours'
import fonts from '../../constants/fonts'

export const StyledInputSection = styled.div`
    position: relative;
    text-align: left;
    width: 100%;
`

export const Input = styled.input`
    padding-top: 6px;
    padding-bottom: 11px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid;
    border-bottom-color: ${({ error }) => error ? colours.scarlet : colours.black};
    font-size: 14px;
    font-family: ${fonts.literata};
    line-height: 1.5;
    color: ${({ error }) => error ? colours.scarlet : colours.black};
    min-height: 40px;
    width: 100%;
    outline: none;
    margin-bottom: 0px;
    ${device.tablet} {
        margin-bottom: 1rem
    }
    
    &::placeholder {
        text-decoration: none;
        color: ${colours.lightGray};
        font-family: ${fonts.literata};
        ${({ hideLabel, name }) => hideLabel && !name && `
            opacity: 0;
        `}
    }
    
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        font-family: ${fonts.literata};
    }
    
    &:disabled {
    border-color: ${colours.lightGray};
    color: ${colours.lightGray};
    &::placeholder {
        color: ${colours.lightGray};
    }
    
    }
    
    ${({ fullBorder }) => fullBorder && `
        margin-top: 10px;
        padding: 11px;
        border: 2px solid ${colours.black};
    `}
    
    ${({ uppercase }) => uppercase && `
        text-transform: uppercase;
    `};
    
    &:focus {
        border-color: ${colours.lightSalmon};
    }
`

Input.propTypes = {
    error: PropTypes.bool,
    fullBorder: PropTypes.bool,
    uppercase: PropTypes.bool
}

Input.defaultProps = {
    error: false,
    fullBorder: false,
    uppercase: false
}

export default Input
