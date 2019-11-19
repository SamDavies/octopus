import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

// Instead of using svgr to generate per component icons, create generic icon
// component and icon hash using create-react-scripts included svgr webpack
// from https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i/46210355
const iconSvgs = require.context('!@svgr/webpack?svgo=false!../../static/icons/', true, /\.svg$/)

const icons = iconSvgs.keys().reduce((collectedIcons, iconPath) => {
    const key = iconPath.match(/\/(.+)\.svg$/i).pop()
    collectedIcons[key] = iconSvgs(iconPath).default
    return collectedIcons
}, {})

export const StyledIconWrapper = styled.span`
    display: inline-block;
    svg, .icon-container {
        ${({ height, width }) => `
            height:  ${height}px;
            width: ${width}px;
            
        `}
    }

    ${({ fillColor }) => fillColor && `
        .fill-color {
            fill:  ${fillColor === 'none' ? fillColor : colors[fillColor]};
        }
    `}

    ${({ strokeColor }) => strokeColor && `
        .stroke-color {
            stroke:  ${strokeColor === 'none' ? strokeColor : colors[strokeColor]};
        }

    `}
`

const Icon = (props) => {
    const SvgIcon = icons[props.icon]
    return (
        <StyledIconWrapper
            className="icon-wrapper"
            height={props.height}
            width={props.width}
            fillColor={props.fillColor}
            strokeColor={props.strokeColor}
        >
            <SvgIcon />
        </StyledIconWrapper>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    /** Number of pixels for height */
    height: PropTypes.number,
    /** Number of pixels for width */
    width: PropTypes.number,
    fillColor: PropTypes.string,
    strokeColor: PropTypes.string
}

Icon.defaultProps = {
    height: 25,
    width: 25,
    fillColor: 'black',
    strokeColor: 'none'
}

export default Icon
