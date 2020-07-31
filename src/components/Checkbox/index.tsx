import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Color from '../../constants/colors'
import noop from 'lodash/noop'

const StyledCustomCheckbox = styled.span`
    display: flex;
    position: relative;
    border: 2px solid ${Color.black};
    height: 14px;
    width: 14px;
    min-width: 14px;
    transition: 60ms ease-in;
    &:after {
        content: "";
        position: relative;
        margin: auto;
        display: inline-block;
        width: 6px;
        height: 6px;
        background: ${Color.salmon};
        opacity: 0;
    }

    input:checked ~ &:after {
         opacity: 1;
    }

    &:focus {
        outline: none;

    }

    input:enabled ~ &:focus {
        border-color: ${Color.lightSalmon};
        + span {
            color: ${Color.lightSalmon};
        }
    }
`

const StyledLabelText = styled(Heading).attrs(() => ({
    bold: true,
    size: 'normal',
    uppercase: true
}))`
    display: inline-block;
    margin: auto 0 auto 10px;
    transition: 150ms ease-in;

`

const StyledWrapper = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    input {
       position: absolute;
       opacity: 0;
       cursor: pointer;
    }
    &:hover {
        input:enabled ~ span {
            border-color: ${Color.lightSalmon};
            color: ${Color.lightSalmon};
        }
    }
    outline: none;

    input:disabled ~ span {
        opacity: 0.5;
    }
`

type Props = {
    inputType: 'radio' | 'checkbox';
    checked: boolean;
    disabled: boolean;
    name: string;
    id: string;
    value: string;
    labelText: string;
    onChange: () => void;
}

const Checkbox: React.FC<Props> = (props: PropsWithChildren<Props>) => {
    const onClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation()
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>): void => {
        e.stopPropagation()
        const enterOrSpace = e.key === 'Enter' || e.key === 'Space'
        if (enterOrSpace && !props.disabled) {
            return props.onChange()
        }
    }

    return <StyledWrapper htmlFor={props.id}>
        <input
            type={props.inputType}
            data-testid='octopus-checkbox'
            id={props.id}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            checked={props.checked}
            onChange={props.onChange}
            onClick={onClick}
        />
        <StyledCustomCheckbox
            role='checkbox'
            tabIndex={props.disabled ? -1 : 0}
            onKeyDown={handleKeyPress}
            aria-checked={props.checked}
            aria-labelledby={`${props.id}_label`}
            onClick={onClick}
        />
        <StyledLabelText
            as='span'
            id={`${props.id}_label`}
            className='label-text'
        >
            {props.labelText}
        </StyledLabelText>
    </StyledWrapper>
}

Checkbox.defaultProps = {
    onChange: noop,
    disabled: false,
    inputType: 'checkbox',
    value: ''
}

export default Checkbox
