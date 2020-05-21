import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../constants/colors'

const getStyles = props => {
    const primaryColours = {
        black: colors.black,
        salmon: colors.salmon,
        red: colors.scarlet,
        grey: colors.grey3
    }

    const primaryColour = primaryColours[props.colour]

    if (props.kind === 'secondary') {
        return `
            background-color: ${colors.white};
            color: ${primaryColour};
            border: 2px solid ${primaryColour};
            
            &:hover {
                opacity: 0.8;
            }
        `
    }

    if (props.kind === 'ghost') {
        return `
            color: ${primaryColour};
            background-color: transparent;
            border-color: transparent;
            
            &:hover {
                opacity: 0.8;
            }
        `
    }

    return `
        color: ${colors.white};
        background-color: ${primaryColour};
        border: 2px solid ${primaryColour};
        
        &:hover {
            opacity: 0.8;
        }
    `
}

const Button = styled.button`
    ${props => props.fullWidth && `
        width: 100%;
    `}
    
    // font
    text-transform: uppercase;
    line-height: 18px;
    font-size: 18px;
    font-align: center;
    font-weight: 700;
    
    // default styles
    appearance: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    min-width: 200px;
    height: 36px;
    padding: 0 25px 0 25px;
    flex-shrink: 0;
    margin: 0;
    transition: all 0.2s ease;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    
    ${props => props.size === 'small' && `
        min-width: auto;
        height: 24px;
        line-height: 12px;
        font-size: 12px;
    `}
    
    ${props => props.size === 'medium' && `
        min-width: auto;
        height: 32px;
        line-height: 14px;
        font-size: 14px;
        font-weight: 600;
    `}
    
    ${props => getStyles(props)}
    
    ${props => props.disabled && `
        color: ${colors.grey5};
        background-color: ${colors.white};
        border-color: ${colors.grey7};
        cursor: not-allowed;
        
        &:hover {
            opacity: 1;
        }
    `}
    
    ${props => props.loading && `
        background: ${colors.grey9};
        border-color: ${colors.grey7};
        color: ${colors.grey5};
        cursor: default;
        pointer-events: none;
        filter: grayscale(1);
    `}
`

Button.propTypes = {
    kind: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
    colour: PropTypes.oneOf(['black', 'salmon', 'red', 'grey']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool
}

Button.defaultProps = {
    kind: 'primary',
    colour: 'black',
    size: 'large',
    disabled: false,
    fullWidth: false
}

export default Button
