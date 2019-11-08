/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <rect width='24' height='24' />
            <polygon points='7 10 12 5 17 10' fill={color} />
            <polygon
                transform='translate(12 16.5) scale(1 -1) translate(-12 -16.5)'
                points='7 19 12 14 17 19'
                fill={color}
            />
        </g>
    </svg>
)

SvgIcon.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

export default SvgIcon
