import PropTypes from 'prop-types'
import React from 'react'
import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'
import config from '../../config'
import { colors } from '../../styles'

export const StyledIconWrapper = styled.span`
    display: inline-block;
    svg, .icon-container {
        ${({ height, width }) => `
            height:  ${height}px;
            width: ${width}px;
            
        `}
    }


    ${({ fillColor, hoverFillColor }) => {
        const fill = colors[fillColor] || fillColor
        const hoverFill = colors[hoverFillColor] || hoverFillColor || fill

        return css`
        .fill-color {
            fill: ${fill};
            transition: fill 0.25s;
            &:hover {
                fill: ${hoverFill};
            }
        }`
    }}

    ${({ strokeColor, hoverStrokeColor }) => {
        const stroke = colors[strokeColor] || strokeColor
        const hoverStroke = colors[hoverStrokeColor] || hoverStrokeColor || stroke

        return css`
        .stroke-color {
            stroke: ${stroke};
            transition: stroke 0.25s;
            &:hover {
                stroke: ${hoverStroke};
            }
        }`
    }}
`

const Icon = (props) =>
    <StyledIconWrapper
        className='icon-wrapper'
        height={props.height}
        width={props.width}
        fillColor={props.fillColor}
        strokeColor={props.strokeColor}
        hoverStrokeColor={props.hoverStrokeColor}
        hoverFillColor={props.hoverFillColor}
    >
        <SVG src={`${config.staticUrl}/icons/${props.icon}.svg`} />
    </StyledIconWrapper>

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    /** Number of pixels for height */
    height: PropTypes.number,
    /** Number of pixels for width */
    width: PropTypes.number,
    fillColor: PropTypes.string,
    strokeColor: PropTypes.string,
    hoverStrokeColor: PropTypes.string,
    hoverFillColor: PropTypes.string
}

Icon.defaultProps = {
    height: 25,
    width: 25,
    fillColor: 'black',
    strokeColor: 'none'
}

export default Icon
