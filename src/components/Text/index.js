import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../styles'

export const StyledText = styled.div`
  position: relative;
  font-family: ${({ font }) => fonts[font]};
  font-weight: ${({ bold }) => (bold ? 800 : 500)};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-stretch: normal;
  letter-spacing: normal;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`

const Text1 = styled(StyledText)`
    font-size: calc(30px + 1vw);
`

const Text2 = styled(StyledText)`
    font-size: calc(24px + 1vw);
`

const Text3 = styled(StyledText)`
    font-size: calc(20px);
`

const Text4 = styled(StyledText)`
    font-size: calc(16px);
`

const Text5 = styled(StyledText)`
    font-size: calc(13px);
`

const Text6 = styled(StyledText)`
    font-size: calc(11px);
`

const Text = props => {
    if (props.level === 1) {
        return <Text1 {...props}>
            {props.children}
        </Text1>
    }

    if (props.level === 2) {
        return <Text2 {...props}>
            {props.children}
        </Text2>
    }

    if (props.level === 3) {
        return <Text3 {...props}>
            {props.children}
        </Text3>
    }

    if (props.level === 4) {
        return <Text4 {...props}>
            {props.children}
        </Text4>
    }

    if (props.level === 6) {
        return <Text6 {...props}>
            {props.children}
        </Text6>
    }

    return <Text5 {...props}>
        {props.children}
    </Text5>
}

Text.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    font: PropTypes.oneOf(['cera', 'literata']),
    bold: PropTypes.bool,
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

Text.defaultProps = {
    size: 'normal',
    font: 'cera',
    bold: false,
    italic: false,
    uppercase: false
}

export default Text
