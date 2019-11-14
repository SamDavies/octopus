/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 14 14'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <g id='icon_add_white' transform='translate(-5.000000, -5.000000)'>
                <g>
                    <rect id='bounds' x='0' y='0' width='24' height='24' />
                    <polygon
                        id='Shape'
                        fill={color}
                        points='11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13 19 11 13 11 13 5'
                    />
                </g>
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
