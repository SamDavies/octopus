import isFunction from 'lodash/isFunction'
import React from 'react'
import TooltipTrigger from 'react-popper-tooltip'
import styled from 'styled-components'
import Color from "../../constants/colors";
import Font from "../../constants/fonts";
import PopperJS from "popper.js";
import {GetTooltipPropsArg} from "react-popper-tooltip/dist/types";

const StyledSpan = styled.div`
    width: 100%;
`


interface StyledTooltipProps extends GetTooltipPropsArg{
    disableTooltip: boolean;
    invert: boolean;
    position: PopperJS.Placement;
}

export const StyledTooltip = styled.div<StyledTooltipProps>`
    width: 100%;
    font-family: ${Font.serif};
    font-weight: bold;
    font-size: 12px;
    background: ${props => props.invert ? Color.white : Color.black};
    color: ${props => props.invert ? Color.black : Color.white};
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
        ${props => props.position === 'top' && `
            border-top: 8px solid ${props.invert ? Color.white : Color.black};
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(50% - 9px);
            top: calc(100% - 1px);

        `}
        ${props => props.position === 'bottom' && `
            border-bottom: 8px solid ${props.invert ? Color.white : Color.black};
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(50% - 9px);
            bottom: calc(100% - 1px);
        `}
        ${props => props.position === 'right' && `
            border-right: 8px solid ${props.invert ? Color.white : Color.black};
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            bottom: calc(50% - 9px);
            right: calc(100% - 1px);
        `}
        ${props => props.position === 'left' && `
            border-left: 8px solid ${props.invert ? Color.white : Color.black};
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

type Props = {
    renderContent: React.ReactElement | string,
    renderTrigger: React.ReactElement | string,
    disableTooltip: boolean
    invert: boolean
    position: PopperJS.Placement
}

const Tooltip: React.FC<Props> = (props: Props) => {
    const tooltipContent = isFunction(props.renderContent)
        ? props.renderContent()
        : props.renderContent

    const tooltipTrigger = isFunction(props.renderTrigger)
        ? props.renderTrigger()
        : props.renderTrigger

    if (props.disableTooltip) return tooltipTrigger

    return <TooltipTrigger
        placement={props.position}
        trigger='hover'
        tooltip={tooltip => (
            <StyledTooltip
                role='tooltip'
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
                role='tooltip-trigger'
                {...trigger.getTriggerProps({
                    ref: trigger.triggerRef
                })}
            >
                {tooltipTrigger}
            </StyledSpan>
        }
    </TooltipTrigger>
}

Tooltip.defaultProps = {
    position: 'top'
}

export default Tooltip
