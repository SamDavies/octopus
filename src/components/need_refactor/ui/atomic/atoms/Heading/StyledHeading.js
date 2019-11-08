import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

const titles = {
    h1: css`
    font-size: 48px;
    letter-spacing: 16px;
    text-indent: 8px;
    line-height: 1.17;
  `,

    h2: css`
    font-size: 20px;
    letter-spacing: 8px;
    @media ${device.tablet} {
      font-size: 40px;
      letter-spacing: 16px;
    }
    line-height: 1.2;
    text-indent: 8px;
  `,
    h3: css`
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: 8px;
    text-indent: 4px;
  `,
    h4: css`
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: 8px;
    text-indent: 4px;
  `,
    h5: css`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 4px;
    text-indent: 2px;
  `
}

export default styled(({ children, level, ...props }) =>
    React.createElement(`h${level}`, props, children)
)`
  font-family: ${fonts.primary};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  color: $black;
  line-height: 1.3;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  color: ${({ inverted }) => (inverted ? colors.white : colors.black)};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  ${({ level }) => titles[`h${level}`]};
`
