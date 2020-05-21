import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Rating from 'react-rating'
import styled from 'styled-components'
import noop from 'lodash/noop'
import colors from '../../constants/colors'
import Button from '../Button'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column
`

const StyledIcon = `
    font-size: ${props => props.size}px;
`

const StyledStarOpen = styled(FaStar)`
    ${StyledIcon}
    color: ${colors.grey6}
`

const StyledStarClosed = styled(FaStar)`
    ${StyledIcon}
    color: ${props => props.isHovering ? colors.salmon : colors.lightSalmon}
`

const sizeToPixels = size => {
    if (size === 'small') {
        return '10px'
    }

    if (size === 'medium') {
        return '20px'
    }

    return '30px'
}

const RatingPicker = props => {
    const [isHovering, setIsHovering] = useState(false)
    const size = sizeToPixels(props.size)
    return <StyledContainer>
        <Rating
            initialRating={props.rating}
            fractions={2}
            emptySymbol={<StyledStarOpen
                sizeToPixels={size}
            />}
            fullSymbol={<StyledStarClosed
                sizeToPixels={size}
                isHovering={isHovering}
            />}
            onHover={value => setIsHovering(!!value)}
            onClick={props.onChange}
        />
        {props.rating > 0 && !props.isStatic && <Button
            size='small'
            kind='ghost'
            onClick={() => props.onChange(0)}
        >
            Clear
        </Button>}
    </StyledContainer>
}

RatingPicker.propTypes = {
    onChange: PropTypes.func,
    inputName: PropTypes.string,
    rating: PropTypes.number,
    isStatic: PropTypes.bool,
    inline: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

RatingPicker.defaultProps = {
    inputName: 'rating',
    onChange: noop,
    rating: 0,
    size: 'medium'
}

export default RatingPicker
