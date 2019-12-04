import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ImagePlaceholderSVG = styled.svg`
    max-width: ${({ maxWidth }) => maxWidth};
`

/* eslint-disable-next-line react/display-name */
const ImagePlaceholder = React.forwardRef(({ aspectRatio, ...props }, ref) => (
    <ImagePlaceholderSVG
        viewBox={`0 0 50 ${aspectRatio * 50}`}
        fill='none'
        width='100%'
        ref={ref}
        strokeWidth='0.5'
        {...props}
    >
        <rect
            width='50'
            height={50 * aspectRatio}
            fill='#f9f9f9'
            stroke='#f9f9f9'
        />
    </ImagePlaceholderSVG>
))

ImagePlaceholder.propTypes = {
    aspectRatio: PropTypes.number
}

ImagePlaceholder.defaultProps = {
    aspectRatio: 1
}

export default ImagePlaceholder
