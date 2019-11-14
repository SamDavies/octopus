/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 14 14'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(-5 -5)'>
                <polygon
                    points='19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12'
                    fill={color}
                    id='close-icon'
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
