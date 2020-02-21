import PropTypes from 'prop-types'
import React from 'react'
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

const ratingTitles = [
    'Do not hire',
    'Unprofessional',
    'Just OK',
    'Good',
    'Awesome'
].reverse()

const RatingPicker = ({ onChange, rating, inputName }) => (
    <StyledRatingInner>
        <StyledFieldset role='group' aria-label='Star Rating'>
            <div>
                {ratingTitles.map((title, i, arr) => {
                    const number = arr.length - i
                    return (
                        <StarInput
                            key={number}
                            number={number}
                            inputName={inputName}
                            title={title}
                            onChange={e => onChange(Number(e.target.value))}
                            isChecked={rating === number}
                        />
                    )
                })}
            </div>

        </StyledFieldset>
        {rating && <StyledClearButton
            onClick={() => onChange(null)}
        >
                Clear
        </StyledClearButton>}
    </StyledRatingInner>
)

RatingPicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputName: PropTypes.string,
    rating: PropTypes.number
}

RatingPicker.defaultProps = {
    inputName: 'rating',
    onChange: () => {},
    rating: 0
}

export default RatingPicker
