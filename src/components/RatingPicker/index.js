import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../'

const RatingWrapper = styled.div`
    display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
    align-items: center;
`

const Svg = styled.svg`
    stroke: ${colors.black};
    fill: transparent;
`

const Path = styled.path`
    ${({ isStatic }) => isStatic && `cursor: pointer`};
`

export const StyledClearButton = styled.span`
    color: ${colors.black};
    font-size: 10px;
    text-decoration: underline;
    letter-spacing: 0.66px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    margin: 2px 0 0 8px;
    cursor: pointer;
`

const ratingTitles = [
    'Do not hire',
    'Unprofessional',
    'Just OK',
    'Good',
    'Awesome'
]

const getFillColor = (rating, hovered, i) => {
    if (i <= hovered) return colors.salmon
    if (i <= rating) return colors.black
    return 'inherit'
}

const getStrokeColor = (rating, hovered, i) => {
    if (i <= hovered) return colors.salmon
    return colors.black
}

const RatingPicker = ({ onChange, rating, inputName, isStatic, size, inline }) => {
    const [hovered, setHovered] = useState(-1)
    return (
        <RatingWrapper inline={inline}>
            <Svg
                width={ratingTitles.length * (size + 4)}
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                preserveAspectRatio='xMidYMid meet'
                {...(!isStatic && {
                    role: 'group',
                    'aria-label': 'Star Rating'
                })}
                aria-valuenow={`${ratingTitles[rating]}; ${rating} out of ${ratingTitles.length} stars`}
                viewBox={`0 0 ${ratingTitles.length * (size + 4)} ${size}`}
            >
                <defs>
                    <Path
                        isStatic={isStatic}
                        d='M26.18 13.16L40 15.27L30 25.52L32.36 40L20 33.16L7.64 40L10 25.52L0 15.27L13.82 13.16L20 0L26.18 13.16Z'
                        id='star-shape'
                        transform={`scale(${size / 40})`}
                    />
                </defs>
                {ratingTitles.map((title, i, arr) => {
                    const value = i + 1
                    return (
                        <use
                            {...(!isStatic && { tabIndex: '-1' })}
                            role='radio'
                            xlinkHref='#star-shape'
                            key={title}
                            x={i * (size + 4)}
                            title={title}
                            onMouseEnter={() => !isStatic && setHovered(value)}
                            onMouseLeave={() => setHovered(0)}
                            onClick={() => !isStatic && onChange(value)}
                            fill={getFillColor(rating, hovered, value)}
                            stroke={getStrokeColor(rating, hovered, value)}
                            strokeWidth='1.5'
                        />
                    )
                })}
            </Svg>
            {rating > 0 && !isStatic && <StyledClearButton
                onClick={() => onChange(0)}
            >
                Clear
            </StyledClearButton>}
        </RatingWrapper>
    )
}

RatingPicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    inputName: PropTypes.string,
    rating: PropTypes.number,
    isStatic: PropTypes.bool,
    inline: PropTypes.bool,
    size: PropTypes.number
}

RatingPicker.defaultProps = {
    inputName: 'rating',
    onChange: () => {},
    rating: 0,
    size: 20
}

export default RatingPicker
