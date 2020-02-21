import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

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
    color: ${colors.white};
    
    appearance: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    min-width: 200px;
    height: 36px;;
    padding: 0 25px 0 25px;
    flex-shrink: 0;
    margin: 0;
    background-color: ${colors.black};
    border: 2px solid ${colors.black};
    transition: all 0.2s ease;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    
    &:hover {
        color: ${colors.white};
        background-color: ${colors.grey2};
        border-color: ${colors.grey2};
    }
    
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
    
    ${props => props.type === 'secondary' && `
        color: ${colors.black};
        background-color: ${colors.white};
        border-color: ${colors.black};
        
        &:hover {
            color: ${colors.grey4};
            background-color: ${colors.white};
            border-color: ${colors.grey5};
        }
    `}
    
    ${props => props.type === 'salmon' && `
        color: ${colors.white};
        background-color: ${colors.salmon};
        border-color: ${colors.salmon};
        
        &:hover {
            color: ${colors.white};
            background-color: ${colors.lightSalmon};
            border-color: ${colors.lightSalmon};
        }
    `}
    
    ${props => props.type === 'ghost' && `
        color: ${colors.grey3};
        background-color: transparent;
        border-color: transparent;
    
        &:hover {
            color: ${colors.grey5};
            background-color: transparent;
            border-color: transparent;
        }
    `}
    
    ${props => props.type === 'danger' && `
        color: ${colors.black};
        background-color: ${colors.white};
        border-color: ${colors.salmon};
        
        &:hover {
            color: ${colors.black};
            background-color: ${colors.white};
            border-color: ${colors.lightSalmon};
        }
    `}
    
    ${props => props.disabled && `
        color: ${colors.grey5};
        background-color: ${colors.white};
        border-color: ${colors.grey7};
        cursor: not-allowed;
        
        &:hover {
            color: ${colors.grey5};
            background-color: ${colors.white};
            border-color: ${colors.grey7};
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
    type: PropTypes.oneOf(['primary', 'secondary', 'salmon', 'ghost', 'danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool
}

Button.defaultProps = {
    type: 'primary',
    size: 'large',
    disabled: false,
    fullWidth: false
}

export default Button
