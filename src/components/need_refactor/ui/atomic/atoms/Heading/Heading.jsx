import React from 'react'
import PropTypes from 'prop-types'
import StyledHeading from './StyledHeading'

const Heading = ({ children, level, inverted, underline, uppercase, bold, style }) => (
    <StyledHeading
        inverted={inverted ? 1 : 0}
        level={level}
        underline={underline ? 1 : 0}
        uppercase={uppercase ? 1 : 0}
        bold={bold ? 1 : 0}
        style={style || {}}
    >
        {children}
    </StyledHeading>
)

Heading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
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
