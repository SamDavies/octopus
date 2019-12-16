import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import StarInput from './StarInput'

export const StyledFieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    border: none;
    display: block;
`

export const StyledRatingInner = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;

    label:hover ~ label {
        color: ${colors.lightSalmon};

        &:before {
            content: "★";
        }
    }


    div {
        display: flex;
        flex-direction: row-reverse;
    }
`

export const StyledClearButton = styled.p`
    color: ${colors.black};
    font-size: 10px;
    text-decoration: underline;
    letter-spacing: 0.66px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    margin-left: 15px;
    cursor: pointer;
`

const ratingTitles = ['Sucks big time', 'Kinda bad', 'Meh', 'Pretty good', 'Awesome']

const RatingPicker = ({ onChange, defaultValue, inputName }) => {
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
            <StyledFieldset role="group" aria-label="Star Rating">
                <div>
                    {[1, 2, 3, 4, 5].reverse().map((number, i) => (
                        <StarInput
                            key={number}
                            number={number}
                            inputName={inputName}
                            title={ratingTitles[i]}
                            onChange={e => changeRating(+e.target.value)}
                            isChecked={rating === number}
                        />
                    ))}
                </div>

            </StyledFieldset>
            {rating && <StyledClearButton
                onClick={() => changeRating(null)}
            >
                Clear
            </StyledClearButton>}
        </StyledRatingInner>
    )
}
RatingPicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputName: PropTypes.string,
    defaultValue: PropTypes.number
}

RatingPicker.defaultProps = {
    inputName: 'rating',
    onChange: () => {}
}

export default RatingPicker
