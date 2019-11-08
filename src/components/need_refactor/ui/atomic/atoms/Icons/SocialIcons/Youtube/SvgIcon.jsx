/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ width, height, color }) => (
    <svg
        height={height}
        width={width}
        fill={color}
        version='1.1'
        viewBox='0 0 512 512'
        xml='preserve'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g>
            <path d='M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6   c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5   c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107   C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z' />
        </g>
    </svg>
)

SvgIcon.propTypes = {
    /** icon width */
    width: PropTypes.string.isRequired,
    /** icon height */
    height: PropTypes.string.isRequired,
    /** icon color */
    color: PropTypes.string.isRequired
}

export default SvgIcon
