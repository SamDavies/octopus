import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import AbstractText from '../AbstractText'

const Heading1 = styled.h1`
    ${AbstractText}
    font-size: 42px;
`

const Heading2 = styled.h2`
    ${AbstractText}
    font-size: 32px
`

const Heading3 = styled.h3`
    ${AbstractText}
    font-size: 28px
`

const Heading4 = styled.h4`
    ${AbstractText}
    font-size: 24px;
`

const Heading = props => {
    if (props.level === 2) {
        return <Heading2 {...props}>
            {props.children}
        </Heading2>
    }

    if (props.level === 3) {
        return <Heading3 {...props}>
            {props.children}
        </Heading3>
    }

    if (props.level === 4) {
        return <Heading4 {...props}>
            {props.children}
        </Heading4>
    }

    return <Heading1 {...props}>
        {props.children}
    </Heading1>
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4]),
    font: PropTypes.oneOf(['cera', 'literata']),
    spacing: PropTypes.oneOf(['normal', 'some', 'wide']),
    bold: PropTypes.bool,
    center: PropTypes.bool,
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

Heading.defaultProps = {
    level: 1,
    font: 'cera',
    spacing: 'normal',
    color: colors.black,
    bold: false,
    center: false,
    italic: false,
    uppercase: false
}

export default Heading
