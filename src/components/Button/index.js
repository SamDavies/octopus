import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { colors, device, fonts } from '../../styles'

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

export const StyledButton = styled.button`
  line-height: 1.55;
  font-size: 13px;
  text-align: center;
  height: auto;
  letter-spacing: 2px;
  position: relative;
  padding: 0.35rem;
  border: 2px solid;
  color: ${colors.white};
  background: ${colors.salmon};
  border-color: ${colors.salmon};
  font-family: ${fonts.cera};
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  padding: 0 0.35rem;
  min-height: 2rem;
  outline: none;
  border-radius: 0;
  transition: all 0.1s ease-in;
  cursor: pointer;
  text-transform: uppercase;
  &:focus {
    box-shadow: 0 0 0 2px ${colors.aqua};
  }
  &:hover, &:focus {
    background: ${colors.lightSalmon};
    border-color: ${colors.lightSalmon};
  }
  &:active {
    background: ${colors.coral};
    border-color: ${colors.coral};
  }
  &:disabled {
    background: ${colors.cloud};
    border-color: ${colors.cloud};
  }

  ${({ size }) => sizesStyles[size]};

  ${({ buttonType }) => buttonType === 'secondary' && `
    background: ${colors.white} !important;
    color: ${colors.black};
    border-color: ${colors.black};
    &:hover, &:focus {
        color: ${colors.lightSalmon};
    }
    &:active {
        color: ${colors.coral};
    }
    &:disabled {
        color: ${colors.cloud};
    }
  `}

  ${({ buttonType, size }) => buttonType === 'underlined' && `
        position: relative;
        padding: 0.35rem;
        color: ${colors.black};
        background: ${colors.white};
        cursor: pointer;
        border: none;

        &:after {
            content: '';
            height: ${size === 'small' ? '1px' : '0.15rem'};
            background: ${colors.black};
            position: absolute;
            bottom: ${size === 'small' ? 0 : 5}px;
            left: 0px;
            right: 0;
            width: auto;
            display: inline-block;
            @media ${device.desktop} {
                bottom: ${size === 'small' ? 2 : 5}px;
            }
        }
        &:focus {
            box-shadow: none;
            color: ${colors.black};
            background: ${colors.lightAqua};
        }
  `}

  ${({ buttonType, inverse }) => buttonType === 'coral' && `
        position: relative;
        color: ${colors.white};
        background: ${colors.coral};
        border-color: ${colors.coral};

        &:disabled {
            background: ${colors.cloud};
            border-color: ${colors.cloud};
        }

        ${inverse && `
            background: transparent;
            color: ${colors.coral};
            border-width: 2px;
            @media ${device.tablet} {
                border-width: 0;
            }
        `}

        &:active {
            background: ${colors.black};
            border-color: ${colors.coral};
        }
  `}

 ${({ buttonType }) => buttonType === 'contained' && `
    letter-spacing: 0.4px;
    background-color: ${colors.black};
    color: ${colors.white};
    border-color: ${colors.black};
    &:focus {
        background: ${colors.black};
        color: ${colors.white};
    }

    &:hover,
    &:active {
        color: ${colors.white};
        background-color: ${colors.black};
    }
 `}
`

const Button = ({ children, ...buttonProps }) => (
    <StyledButton {...buttonProps}>
        {children}
    </StyledButton>
)

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    disabled: PropTypes.bool,
    inverse: PropTypes.bool,
    buttonType: PropTypes.oneOf([
        'primary',
        'secondary',
        'underlined',
        'coral',
        'contained'
    ]),
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    onClick: PropTypes.func
}

Button.defaultProps = {
    uppercase: true,
    size: 'normal',
    disabled: false,
    inverse: false,
    buttonType: 'primary',
    onClick: () => {}
}

export default Button
