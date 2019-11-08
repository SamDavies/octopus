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
            <polygon
                points='9 16.2 4.8 12 3.4 13.4 9 19 21 7 19.6 5.6'
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
