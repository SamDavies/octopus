import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { StyledText } from '../Text'

const StyledCustomCheckbox = styled.span`
    display: flex;
    position: relative;
    border: 2px solid ${colors.black};
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
        background: ${colors.salmon};
        opacity: 0;
    }

    input:checked ~ &:after {
         opacity: 1;
    }

    &:focus {
        outline: none;
      
    }

    input:enabled ~ &:focus {
        border-color: ${colors.lightSalmon};
        + span {
            color: ${colors.lightSalmon};
        }
    }
`

const StyledLabelText = styled(StyledText).attrs(() => ({
    font: 'cera',
    bold: true,
    size: 'normal',
    uppercase: true
}))`
    display: inline-block;
    margin: auto 0 auto 10px;
    letter-spacing: 0.8px;
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
            border-color: ${colors.lightSalmon};
            color: ${colors.lightSalmon};
        }
    }
    outline: none;

    input:disabled ~ span {
        opacity: 0.5;
    }
`

const Checkbox = props => {
    const onClick = e => {
        e.stopPropagation()
    }

    const handleKeyPress = (e) => {
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
            tabIndex={props.disabled ? '-1' : '0'}
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

Checkbox.propTypes = {
    inputType: PropTypes.oneOf([
        'radio',
        'checkbox'
    ]),
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    labelText: PropTypes.string,
    onChange: PropTypes.func
}

Checkbox.defaultProps = {
    onChange: () => {},
    disabled: false,
    inputType: 'checkbox',
    value: ''
}

export default Checkbox
