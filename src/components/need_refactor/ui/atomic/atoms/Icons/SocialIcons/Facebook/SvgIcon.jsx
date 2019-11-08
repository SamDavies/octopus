/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ width, height, color, type }) => {
    switch (type) {
    case 'box':
        return (
            <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={width}
                height={height}
                fill={color}
                viewBox='0 0 60.734 60.733'
                xml='preserve'
            >
                <g>
                    <path
                        d='M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
                    v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
                    v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z'
                    />
                </g>
            </svg>
        )
    case 'knockout':
        return (
            <svg
                viewBox='0 0 8 14'
                version='1.1'
                x='0px'
                y='0px'
                width={width}
                height={height}
                fill={color}
                xml='preserve'
            >
                <g>
                    <path d='M14.0315152,7.66060606 L15.2,7.66060606 L15.2,5.68727273 C14.9987879,5.66060606 14.3054545,5.6 13.4981818,5.6 C11.8133333,5.6 10.6593939,6.62787879 10.6593939,8.51636364 L10.6593939,10.2545455 L8.8,10.2545455 L8.8,12.4606061 L10.6593939,12.4606061 L10.6593939,18.0121212 L12.9381818,18.0121212 L12.9381818,12.4606061 L14.7224242,12.4606061 L15.0060606,10.2545455 L12.9381818,10.2545455 L12.9381818,8.73454545 C12.9381818,8.0969697 13.1151515,7.66060606 14.0315152,7.66060606 Z' id='Path' />
                </g>
            </svg>
        )
    default:
        return (
            <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={width}
                height={height}
                fill={color}
                viewBox='0 0 60.734 60.733'
                xml='preserve'
            >
                <g>
                    <path
                        d='M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
                        v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
                        v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z'
                    />
                </g>
            </svg>
        )
    }
}

SvgIcon.propTypes = {
    /** icon width */
    width: PropTypes.string.isRequired,
    /** icon height */
    height: PropTypes.string.isRequired,
    /** icon color */
    color: PropTypes.string.isRequired,
    /** icon type */
    type: PropTypes.string
}

export default SvgIcon
