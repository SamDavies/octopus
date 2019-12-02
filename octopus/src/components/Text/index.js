import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../constants'

const sizes = {
    small: {
        fontSize: 11,
        lineHeight: 1.27
    },
    normal: {
        fontSize: 13,
        lineHeight: 1.25
    },
    large: {
        fontSize: 16,
        lineHeight: 1.25
    },
    extraLarge: {
        fontSize: 40,
        lineHeight: 1.25
    }
}

export const StyledText = styled.p`
  position: relative;
  font-family: ${({ font }) => fonts[font]};
  font-size: ${({ size }) => sizes[size].fontSize}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 500)};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-stretch: normal;
  line-height: ${({ size }) => sizes[size].lineHeight};
  letter-spacing: normal;
  color: ${({ color }) => colors[color]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  margin: ${({ size }) => `0 0 ${sizes[size].fontSize / 2}px 0`};
  ${({ underline, color }) => underline && `
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: ${colors[color]};
        }
    `};
`

const Text = ({ children, ...props }) => (
    <StyledText {...props}>{children}</StyledText>
)

Text.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large', 'extraLarge']),
    font: PropTypes.oneOf(['cera', 'literata']),
    bold: PropTypes.bool,
    uppercase: PropTypes.bool,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

Text.defaultProps = {
    size: 'normal',
    color: 'black',
    font: 'cera',
    bold: false,
    underline: false,
    italic: false,
    uppercase: false
}

export default Text
