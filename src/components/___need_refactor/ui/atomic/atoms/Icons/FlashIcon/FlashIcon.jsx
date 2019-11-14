import React from 'react'
import PropTypes from 'prop-types'

import { colors } from '../../../../../../styles/global-styles'

function FlashIcon ({ color, onClick, width, height }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            width={width}
            height={height}
            viewBox='0 0 560.317 560.316'
            xmlSpace='preserve'
            onClick={onClick}
        >
            <g>
                <g>
                    <path
                        d='M207.523,560.316c0,0,194.42-421.925,194.444-421.986l10.79-23.997c-41.824,12.02-135.271,34.902-135.57,35.833    C286.96,122.816,329.017,0,330.829,0c-39.976,0-79.952,0-119.927,0l-12.167,57.938l-51.176,209.995l135.191-36.806    L207.523,560.316z'
                        fill={color}
                    />
                </g>
            </g>
        </svg>
    )
}

FlashIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
    onClick: PropTypes.func,
    /** icon width */
    width: PropTypes.string,
    /** icon height */
    height: PropTypes.string
}

FlashIcon.defaultProps = {
    color: colors.white,
    onClick: () => {},
    width: '100%',
    height: '100%'
}

export default FlashIcon
