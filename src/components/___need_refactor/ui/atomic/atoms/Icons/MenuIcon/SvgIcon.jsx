import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 16 14'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(-4 -5)'>
                <rect width='24' height='24' />
                <polygon points='4 19 20 19 20 17 4 17' fill={color} />
                <polygon points='4 13 20 13 20 11 4 11' fill={color} />
                <polygon points='4 5 4 7 20 7 20 5' fill={color} />
            </g>
        </g>
    </svg>
)

SvgIcon.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

export default SvgIcon
