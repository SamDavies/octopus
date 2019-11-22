import React from 'react'
import PropTypes from 'prop-types'
import StyledListOption from './StyledListOption'

const ListOption = ({ children, onClick, bordered }) => (
    <StyledListOption onClick={onClick} bordered={bordered}>
        {children}
    </StyledListOption>
)

ListOption.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    bordered: PropTypes.bool,
    onClick: PropTypes.func
}

ListOption.defaultProps = {
    onClick: () => {},
    bordered: true
}

export default ListOption
