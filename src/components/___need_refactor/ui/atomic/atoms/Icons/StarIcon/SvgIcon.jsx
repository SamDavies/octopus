/* eslint-disable maxLen */
import React from 'react'
import PropTypes from 'prop-types'

const StarIcon = ({ color, borderColor, width, height }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        id='icons'
        viewBox='0 0 128 128'
        width='24px'
        height='24px'>
        <path
            d='M109.65 50.86a2.008 2.008 0 0 1-.39 2.69L84.38 73.82a2.004 2.004 0 0 0-.63 2.17l10.15 31.39a2.007 2.007 0 0 1-.76 2.26 1.994 1.994 0 0 1-2.38-.07L65.24 89.51a2.012 2.012 0 0 0-2.48 0l-25.52 20.06a2 2 0 0 1-3.14-2.19l10.15-31.39a2.004 2.004 0 0 0-.63-2.17L18.74 53.55a2.008 2.008 0 0 1-.39-2.69 2.097 2.097 0 0 1 1.74-.86h29.14a2 2 0 0 0 1.87-1.3l11.03-29.4a1.995 1.995 0 0 1 3.74 0L76.9 48.7a2 2 0 0 0 1.87 1.3h29.14a2.097 2.097 0 0 1 1.74.86z'
            fill={color} />
        <path
            d='M109.65 50.86a2.097 2.097 0 0 0-1.74-.86H78.77a2 2 0 0 1-1.87-1.3L65.87 19.3a1.995 1.995 0 0 0-3.74 0L51.1 48.7a2 2 0 0 1-1.87 1.3H20.09a2.097 2.097 0 0 0-1.74.86 2.008 2.008 0 0 0 .39 2.69l24.88 20.27a2.004 2.004 0 0 1 .63 2.17L34.1 107.38a2 2 0 0 0 3.14 2.19l25.52-20.06a2.012 2.012 0 0 1 2.48 0l25.52 20.06a2 2 0 0 0 3.14-2.19L83.75 75.99a2.004 2.004 0 0 1 .63-2.17l24.88-20.27a2.008 2.008 0 0 0 .39-2.69z'
            fill='none'
            stroke={borderColor}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='10' />
    </svg>
)

StarIcon.propTypes = {
    borderColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

export default StarIcon
