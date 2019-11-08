/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ width, height, color }) => (
    <svg
        height={height}
        width={width}
        fill={color}
        version='1.1'
        viewBox='0 0 56.693 56.693'
        xml='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xlink='http://www.w3.org/1999/xlink'
    >
        <g>
            <path d='M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z' />
            <path d='M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z' />
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