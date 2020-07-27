import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import Rating from 'react-rating'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Button from '../Button'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledClear = styled.div`
    margin-right: 0px;
`

const StyledIcon = props => `
    font-size: ${props.size};
`

const StyledStarOpen = styled(IoIosStarOutline)`
    ${StyledIcon}
    color: ${colors.black};
`

const StyledStarClosed = styled(IoIosStar)`
    ${StyledIcon}
    color: ${props => props.$isHovering ? colors.salmon : colors.black};
`

const sizeToPixels = size => {
    if (size === 'medium') {
        return '20px'
    }

    return '30px'
}

const StarRating = props => {
    const [isHovering, setIsHovering] = useState(false)
    const size = sizeToPixels(props.size)
    return <StyledContainer>
        <Rating
            initialRating={props.rating}
            emptySymbol={<StyledStarOpen
                size={size}
            />}
            fullSymbol={<StyledStarClosed
                size={size}
                $isHovering={isHovering}
            />}
            onHover={value => setIsHovering(!!value)}
            onClick={props.onChange}
        />
        {props.rating > 0 && !props.isStatic && <StyledClear>
            <Button
                size='small'
                kind='ghost'
                onClick={() => props.onChange(0)}
            >
                Clear
            </Button>
        </StyledClear>}
    </StyledContainer>
}

StarRating.propTypes = {
    onChange: PropTypes.func,
    inputName: PropTypes.string,
    rating: PropTypes.number,
    isStatic: PropTypes.bool,
    inline: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'large'])
}

StarRating.defaultProps = {
    inputName: 'rating',
    onChange: noop,
    rating: 0,
    size: 'medium'
}

export default StarRating
