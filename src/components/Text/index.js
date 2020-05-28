import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import AbstractText from '../AbstractText'

const Normal = styled.div`
    ${AbstractText}
    font-size: 16px;
`

const Small = styled.div`
    ${AbstractText}
    font-size: 13px;
`

const Text = props => {
    if (props.size === 'small') {
        return <Small {...props}>
            {props.children}
        </Small>
    }

    return <Normal {...props}>
        {props.children}
    </Normal>
}

Text.propTypes = {
    size: PropTypes.oneOf(['normal', 'small']),
    font: PropTypes.oneOf(['cera', 'literata']),
    spacing: PropTypes.oneOf(['normal', 'wide']),
    color: PropTypes.string,
    bold: PropTypes.bool,
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

Text.defaultProps = {
    color: colors.black,
    size: 'normal',
    font: 'cera',
    spacing: 'normal',
    bold: false,
    italic: false,
    uppercase: false
}

export default Text
