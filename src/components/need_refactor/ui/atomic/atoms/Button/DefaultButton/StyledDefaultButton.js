import { colors, fonts } from '../../../../../../styles/global-styles'
import styled, { css } from 'styled-components'

const sizesStyles = {
    small: css`
        padding: 0.5rem 0.15rem;
        max-height: 1.5rem;
        min-height: 0;
        letter-spacing: 0px;
        line-height: 0.42;
    `,
    normal: css`
        line-height: 16px;
        padding: 0.35rem 0.5rem;
        max-height: 2rem;
    `,
    large: css`
        font-size: 16px;
        line-height: 24px;
        border-width: 4px;
        padding: 0.25rem 0.5rem;
    `
}

const getColours = ({ inverted, disabled }) => {
    if (inverted) {
        if (disabled) {
            return {
                color: colors.white,
                backgroundColor: colors.lightGray,
                borderColor: colors.lightGray
            }
        }
        return {
            color: colors.white,
            backgroundColor: colors.black,
            borderColor: colors.black
        }
    }

    if (disabled) {
        return {
            color: colors.lightGray,
            backgroundColor: colors.white,
            borderColor: colors.lightGray
        }
    }
    return {
        color: colors.black,
        backgroundColor: colors.white,
        borderColor: colors.black
    }
}

export default styled.button`
    position: relative;
    font-family: ${fonts.primary};
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.55;
    text-align: center;
    height: auto;
    letter-spacing: 2px;
    border: solid 2px ${({ inverted, disabled }) => getColours({ inverted, disabled }).borderColor};
    color: ${({ inverted, disabled }) => getColours({ inverted, disabled }).color};
    background-color: ${({ inverted, disabled }) => getColours({ inverted, disabled }).backgroundColor};
    padding: 0 0.35rem;
    min-height: 2rem;
    outline: none;
    border-radius: 0;
    transition: all 0.1s ease-in;
    cursor: pointer;
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')}
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    &:focus {
    box-shadow: 0 0 0 2px ${colors.aqua};
    }
    &:active {
        box-shadow: none;
        background-color: ${colors.black};
        color: ${colors.white};
    }
    ${({ size }) => sizesStyles[size]}
`
