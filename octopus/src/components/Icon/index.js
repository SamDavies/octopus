import PropTypes from 'prop-types'
import React from 'react'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import { colors } from '../../styles'
import config from '../../config'

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
    const iconPath = `${config.staticUrl}/icons/${props.icon}.svg`
    return <StyledIconWrapper
        className="icon-wrapper"
        height={props.height}
        width={props.width}
        fillColor={props.fillColor}
        strokeColor={props.strokeColor}
    >
        <SVG src={iconPath} />
    </StyledIconWrapper>
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
