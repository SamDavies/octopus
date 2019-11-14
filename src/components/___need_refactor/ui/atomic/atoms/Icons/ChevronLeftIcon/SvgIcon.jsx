/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 8 12'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
    >
        <title>icon_chevron_left</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <g id='icon_chevron_left' transform='translate(-8.000000, -6.000000)'>
                <g>
                    <polygon
                        id='Shape'
                        fill={color}
                        points='15.4 7.4 14 6 8 12 14 18 15.4 16.6 10.8 12'
                    />
                    <rect id='bounds' x='0' y='0' width='24' height='24' />
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
