import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles/global-styles'

export const StyledRatingInner = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
`

export const StyledFieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    border: none;
    float: left;
    display: block;

    &:not(:checked) > label:hover ~ label {
        color: ${colors.black};

        &:before {
            content: "★";
        }
    }
`

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
        color: ${colors.black};

        &:before {
            content: "★";
        }
    }

    &:not(:checked) + label:hover,
    &:checked + label:hover {
        color: #989898;
    }
`

export const StyledLabel = styled.label`
    color: ${colors.black};
    float: right;
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

export const StyledClearButton = styled.p`
    color: ${colors.persimmon};
    font-size: 10px;
    text-decoration: underline;
    letter-spacing: 0.66px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    margin-left: 15px;
    cursor: pointer;
`

const StarRating = ({ onChange, name, defaultValue }) => {
    const [rating, setRating] = useState(null)

    const changeRating = (value) => {
        setRating(value)
        onChange(value)
    }

    useEffect(() => {
        if (defaultValue) {
            setRating(defaultValue)
        }
    }, [defaultValue])

    return (
        <StyledRatingInner>
            <StyledFieldset>
                <StyledRadioInput
                    type='radio'
                    id='star5'
                    value='5'
                    onChange={() => changeRating(5)}
                    checked={rating === 5}
                />
                <StyledLabel
                    data-testid={name}
                    data-role='star-rating'
                    htmlFor='star5'
                    id='label-star5'
                    title='Awesome - 5 stars'
                />

                <StyledRadioInput
                    type='radio'
                    id='star4'
                    value='4'
                    onChange={() => changeRating(4)}
                    checked={rating === 4}
                />
                <StyledLabel
                    data-role='star-rating'
                    htmlFor='star4'
                    id='label-star4'
                    title='Pretty good - 4 stars'
                />

                <StyledRadioInput
                    type='radio'
                    id='star3'
                    value='3'
                    onChange={() => changeRating(3)}
                    checked={rating === 3}
                />
                <StyledLabel
                    data-role='star-rating'
                    htmlFor='star3'
                    id='label-star3'
                    title='Meh - 3 stars'
                />

                <StyledRadioInput
                    type='radio'
                    id='star2'
                    value='2'
                    onChange={() => changeRating(2)}
                    checked={rating === 2}
                />
                <StyledLabel
                    data-role='star-rating'
                    htmlFor='star2'
                    id='label-star2'
                    title='Kinda bad - 2 stars'
                />

                <StyledRadioInput
                    type='radio'
                    id='star1'
                    value='1'
                    onChange={() => changeRating(1)}
                    checked={rating === 1}
                />
                <StyledLabel
                    data-role='star-rating'
                    htmlFor='star1'
                    id='label-star1'
                    title='Sucks big time - 1 star'
                />
            </StyledFieldset>
            {rating && <StyledClearButton
                onClick={() => changeRating(null)}
            >
                Clear
            </StyledClearButton>}
        </StyledRatingInner>
    )
}

StarRating.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    defaultValue: PropTypes.number
}

export default StarRating
