import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

// Instead of using svgr to generate per component icons, create generic icon
// component and icon hash using create-react-scripts included svgr webpack
// from https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i/46210355
const iconSvgs = require.context('!@svgr/webpack!../../static/icons/', true, /\.svg$/)

const icons = iconSvgs.keys().reduce((collectedIcons, iconPath) => {
    const key = iconPath.match(/\/(.+)\.svg$/i).pop()
    collectedIcons[key] = iconSvgs(iconPath).default
    return collectedIcons
}, {})

const IconWrapper = styled.div`
    display: inline-block;
    svg {
        ${({ height, width }) => `
            height:  ${height}px;
            width: ${width}px;
            
        `}
    }
    .fill-color {
        fill: ${({ fillColor }) => colors[fillColor]};
    }

    .stroke-color {
        stroke:  ${({ fillColor, strokeColor }) => colors[strokeColor || fillColor]};
    }

`

const Icon = (props) => {
    const SvgIcon = icons[props.icon]
    return (
        <IconWrapper
            height={props.height}
            width={props.width}
            fillColor={props.fillColor}
            strokeColor={props.strokeColor}
        >
            <SvgIcon />
        </IconWrapper>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    fillColor: PropTypes.string,
    strokeColor: PropTypes.string
}

Icon.defaultProps = {
    height: 25,
    width: 25,
    fill: 'black'
}

export default Icon
