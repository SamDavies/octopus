/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(-4 -4)'>
                <rect width='24' height='24' />
                <g transform='translate(4 3)' fill={color} fillRule='nonzero'>
                    <path d='m15.74 4.5903c0.34662-0.34662 0.34662-0.92432 0-1.2532l-2.0797-2.0797c-0.32884-0.34662-0.90654-0.34662-1.2532 0l-1.6353 1.6264 3.3329 3.3329 1.6353-1.6264zm-15.74 9.0743v3.3329h3.3329l9.8297-9.8386-3.3329-3.3329-9.8297 9.8386z' />
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
