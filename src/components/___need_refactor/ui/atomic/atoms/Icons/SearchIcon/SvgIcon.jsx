/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        version='1.1'
        viewBox='0 0 18 17'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(-3 -3)'>
                <rect width='24' height='24' />
                <path
                    d='m20 19.072l-4.5832-4.5869c2.1467-2.6728 1.828-6.5655-0.72472-8.8507s-6.4424-2.16-8.844 0.28466c-2.4015 2.4447-2.4711 6.3499-0.15816 8.8791 2.3129 2.5292 6.1958 2.7939 8.8282 0.60173l4.5832 4.5998 0.89868-0.92769zm-13.275-5.0121c-1.8847-2.0703-1.813-5.2624 0.16277-7.2453 1.9758-1.9829 5.1564-2.0549 7.2192-0.16336 1.8847 2.0703 1.813 5.2624-0.16277 7.2453-1.9758 1.9829-5.1564 2.0549-7.2192 0.16336z'
                    fill={color}
                    fillRule='nonzero'
                    stroke={color}
                    strokeWidth='.5'
                />
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
