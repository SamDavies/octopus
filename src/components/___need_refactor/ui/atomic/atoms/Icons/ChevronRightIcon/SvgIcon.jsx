/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 8 12'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(-8 -6)'>
                <polygon
                    points='8.6 7.4 10 6 16 12 10 18 8.6 16.6 13.2 12'
                    fill={color}
                />
                <rect width='24' height='24' />
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
