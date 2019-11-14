import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { iconsPath } from '../../../config/global-constants'

const Icon = ({ className, type, ...restProps }) => (
    <i className={cn(className, type)} {...restProps}>
        <img src={`${iconsPath}${type}.svg`} alt={type} />
    </i>
)

Icon.propTypes = {
    /** Icon custom class */
    className: PropTypes.string,
    /** icon type */
    type: PropTypes.string.isRequired
}

Icon.defaultProps = {
    className: ''
}

export default Icon
