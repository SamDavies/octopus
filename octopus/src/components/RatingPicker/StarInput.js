import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { colors } from '../../constants'

export const StyledRadioInput = styled.input`
    display: none;

    &:checked ~ label,
    &:not(:checked) > label:hover {
        color: ${colors.black};

        &:before {
            content: "★";
        }
    }

    &:not(:checked) > label:hover,
    &:not(:checked) > label:hover ~ label {
        color: ${colors.black};
    }

    &:checked + label:hover,
    &:checked ~ label:hover,
    &:hover ~ input:checked ~ label,
    &:checked ~ label:hover ~ label {
        color: ${colors.lightSalmon};

        &:before {
            content: "★";
        }
    }

    &:not(:checked) + label:hover,
    &:checked + label:hover {
        color: ${colors.lightSalmon};
    }
`

export const StyledLabel = styled.label`
    color: ${colors.black};
    cursor: pointer;

    &:hover {
        &:before {
            content: "★";
        }
    }

    &:before {
        font-size: 30px;
        display: inline-block;
        content: "☆";
    }
`

const StarInput = ({ number, onChange, isChecked, title, inputName }) => (
    <Fragment>
        <StyledRadioInput
            type='radio'
            id={`${inputName}-star${number}`}
            value={String(number)}
            onChange={onChange}
            name={inputName}
            checked={isChecked}
        />
        <StyledLabel
            data-testid={`star-rating-${number}`}
            data-role='star-rating'
            htmlFor={`${inputName}-star${number}`}
            title={`${title} - ${number} star${number > 1 ? 's' : ''}`}
        />
    </Fragment>
)

StarInput.propTypes = {
    inputName: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    isChecked: PropTypes.bool
}

export default StarInput
