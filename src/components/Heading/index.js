import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { colors, device, fonts } from '../../styles'

const headingStyles = {
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

export const StyledHeading = styled.div`
  font-family: ${fonts.cera};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  line-height: 1.3;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  color: ${({ inverted }) => (inverted ? colors.white : colors.black)};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  ${({ level }) => headingStyles[`h${level}`]};
`

const Heading = ({ children, ...props }) => (
    <StyledHeading
        as={`h${props.level}`}
        {...props}
    >
        {children}
    </StyledHeading>
)

Heading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    /** Represents type of the header */
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
    /** Is the text has inverted color */
    inverted: PropTypes.bool,
    /** Is the text has the underline border */
    underline: PropTypes.bool,
    /** Is the text should be in uppercase */
    uppercase: PropTypes.bool,
    /** Should the text be bold */
    bold: PropTypes.bool,
    /** Style overrides */
    style: PropTypes.object
}

Heading.defaultProps = {
    level: 1,
    inverted: false,
    underline: false,
    uppercase: false,
    bold: false,
    style: {}
}

export default Heading
