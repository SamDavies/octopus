import PropTypes from 'prop-types'
import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

const StyledSpan = styled.div`
    width: 100%;
`

export const StyledTooltip = styled.div`
    width: 100%;
    font-family: ${fonts.cera};
    font-weight: bold;
    font-size: 12px;
    background: ${({ invert }) => invert ? colors.white : colors.black};
    color: ${({ invert }) => invert ? colors.black : colors.white};
    max-width: 200px;
    position: relative;
    padding: 1rem;
    line-height: 16px;
    text-align: center;
    text-transform: none;
    z-index: 100000;
    letter-spacing: 0.87px;
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        ${({ position, invert }) => position === 'top' && `
            border-top: 8px solid ${invert ? colors.white : colors.black};
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(50% - 9px);
            top: calc(100% - 1px);

        `}
        ${({ position, invert }) => position === 'bottom' && `
            border-bottom: 8px solid ${invert ? colors.white : colors.black};
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(50% - 9px);
            bottom: calc(100% - 1px);
        `}
        ${({ position, invert }) => position === 'right' && `
            border-right: 8px solid ${invert ? colors.white : colors.black};
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            bottom: calc(50% - 9px);
            right: calc(100% - 1px);
        `}
        ${({ position, invert }) => position === 'left' && `
            border-left: 8px solid ${invert ? colors.white : colors.black};
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            bottom: calc(50% - 9px);
            left: calc(100% - 1px);
        `}
    }

    p {
        margin: 0;
    }
`

const Tooltip = props => {
    const tooltipContent = isFunction(props.renderContent)
        ? props.renderContent(props)
        : props.renderContent

    const tooltipTrigger = isFunction(props.renderTrigger)
        ? props.renderTrigger(props)
        : props.renderTrigger

    if (props.disableTooltip) return tooltipTrigger

    return <TooltipTrigger
        placement={props.position}
        trigger='hover'
        tooltip={tooltip => (
            <StyledTooltip
                invert={props.invert}
                {...tooltip.getTooltipProps({
                    ref: tooltip.tooltipRef,
                    className: 'tooltip-container',
                    position: tooltip.placement
                })}
            >
                {tooltipContent}
            </StyledTooltip>
        )}
    >
        {trigger =>
            <StyledSpan
                {...trigger.getTriggerProps({
                    ref: trigger.triggerRef
                })}
            >
                {tooltipTrigger}
            </StyledSpan>
        }
    </TooltipTrigger>
}

Tooltip.propTypes = {
    /* Hides the tooltip */
    hideTip: PropTypes.bool,
    renderContent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        )
    ]).isRequired,
    invert: PropTypes.bool,
    renderTrigger: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        )
    ]).isRequired,
    disableTooltip: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right', 'bottom', 'top'])
}

Tooltip.defaultProps = {
    hideTip: false,
    position: 'top'
}

export default Tooltip
