import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const StyledTooltip = styled.span`
    width: 100%;
    font-family: ${fonts.cera};
    font-weight: bold;
    // visibility: ${({ showTip }) => (showTip ? 'visible' : 'hidden')};
    font-size: 12px;
    background: ${colors.black};
    color: ${colors.white};
    max-width: 200px;
    position: absolute;
    padding: 1rem;
    line-height: 16px;
    text-align: center;
    left: 0;
    bottom: 0;
    text-transform: none;
    z-index: 100000;
    letter-spacing: 0.87px;
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        ${({ position }) => position === 'left' && `

        `}
         ${({ position }) => position === 'right' && `

        `}
        ${({ position }) => position === 'bottom' && `
            border-bottom: 8px solid ${colors.black};
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(50% - 9px);
            bottom: calc(100% - 1px);
        `}
        ${({ position }) => position === 'top' && `
            border-top: 8px solid ${colors.black};
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(50% - 9px);
            top: calc(100% - 1px);

        `}
       
       
    }
`

const TooltipContainer = styled.div`
    position: relative;
`

const Tooltip = props => {
    const [showTip, setShowTip] = useState(false)
    return (
        <TooltipContainer
            onMouseOver={() =>
                props.canShowTip ? setShowTip(true) : null
            }
            onMouseLeave={() =>
                props.canShowTip ? setShowTip(false) : null
            }
        >
            <StyledTooltip showTip={showTip} position={props.position}>{props.tipText}</StyledTooltip>
            {props.children}
        </TooltipContainer>
    )
}

Tooltip.propTypes = {
    canShowTip: PropTypes.bool,
    tipText: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        )
    ]).isRequired,
    position: PropTypes.oneOf([
        'left',
        'right',
        'bottom',
        'top'
    ])

}

Tooltip.defaultProps = {
    canShowTip: true,
    direction: 'bottom'
}

export default Tooltip
