/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, borderColor, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 20 18'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(-2 -4)'>
                <rect width='24' height='24' />
                <path
                    d='m12 8c-0.67-1.732-2.547-3-4.5-3-2.543 0-4.5 1.932-4.5 4.5 0 3.529 3.793 6.258 9 11.5 5.207-5.242 9-7.971 9-11.5 0-2.568-1.957-4.5-4.5-4.5-1.955 0-3.83 1.268-4.5 3z'
                    stroke={borderColor}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    fill={color}
                />
            </g>
        </g>
    </svg>
)

SvgIcon.propTypes = {
    color: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

export default SvgIcon
