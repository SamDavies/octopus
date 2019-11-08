/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ color, width, height }) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
    >
        <defs />
        <g
            id='twitter_icon'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
        >
            <path
                d='M2.43455172,3.94695606 C4.27648276,6.26269406 7.5742069,8.44851909 12,8.68408419 C11.7557241,7.6784325 11.7322069,4.94791209 13.6621379,3.81391265 C14.5254483,3.30599985 15.3424828,3 16.3044138,3 C17.5136552,3 18.5066897,3.41008676 19.5626897,4.40947757 C20.4214483,4.28582546 22.0274483,3.6026084 22.4082759,3.33417375 C22.1602069,4.27565155 21.167931,5.4847814 20.4510345,5.77199865 C21.1095172,5.77043343 22.5562069,5.38069449 23,5.15060765 C22.3847586,6.13043326 21.3105517,7.06799802 20.7226207,7.45695435 C21.4031034,13.4916471 15.9728966,20.9921651 8.17351724,20.9999912 C5.9462069,21.0023391 3.5262069,20.5335567 1,19.1052965 C3.49206897,19.394079 6.16241379,18.5942533 7.69558621,17.2106018 C5.76186207,17.1667757 3.80386207,15.8762546 2.91324138,13.8946903 C3.882,14.1928641 4.77489655,14.3446901 5.30441379,13.8946903 C4.40165517,13.7945165 1.47793103,12.2081694 1.47793103,9.13643179 C2.15006897,9.68738805 3.11731034,10.2563443 3.86986207,10.1053009 C2.63937931,9.38295341 0.850551724,6.63521562 2.43455172,3.94695606 Z'
                id='twitter-copy'
                fill={color}
            />
        </g>
    </svg>
)

SvgIcon.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

export default SvgIcon