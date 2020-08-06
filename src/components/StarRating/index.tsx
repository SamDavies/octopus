import noop from 'lodash/noop'
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

type StyledIconProps = {
    size: string;
}

const StyledIcon = (props: StyledIconProps): string => `
    font-size: ${props.size};
`

const StyledStarOpen = styled(IoIosStarOutline)`
    ${StyledIcon};
    color: ${colors.black};
`

type StyledStarClosedProps = {
    size: string;
    $isHovering: boolean;
}

const StyledStarClosed = styled(IoIosStar)<StyledStarClosedProps>`
    ${StyledIcon};
    color: ${(props): string => props.$isHovering ? colors.salmon : colors.black}
`

const sizeToPixels = (size: string): string => {
    if (size === 'medium') {
        return '20px'
    }

    return '30px'
}

type Props = {
    onChange: (value: number) => void;
    rating: number;
    isStatic: boolean;
    size: 'medium' | 'large';
}

const StarRating: React.FC<Props> = (
    {
        isStatic,
        onChange = noop,
        rating = 0,
        size = 'medium'
    }: Props
) => {
    const [isHovering, setIsHovering] = useState(false)
    const pixelSize = sizeToPixels(size)
    return <StyledContainer>
        <Rating
            initialRating={rating}
            emptySymbol={<StyledStarOpen
                size={pixelSize}
            />}
            fullSymbol={<StyledStarClosed
                size={pixelSize}
                $isHovering={isHovering}
            />}
            onHover={(value): void => setIsHovering(!!value)}
            onClick={onChange}
        />
        {rating > 0 && !isStatic && <StyledClear>
            <Button
                size='small'
                kind='ghost'
                onClick={(): void => onChange(0)}
            >
                Clear
            </Button>
        </StyledClear>}
    </StyledContainer>
}

export default StarRating
