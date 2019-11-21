import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StyledList } from './StyledList'

const List = ({
    children,
    header,
    footer,
    bordered,
    noResult,
    noResultComponent,
    hideDesktop
}) => (
    <Fragment>
        {!noResult ? (
            <StyledList bordered={bordered} hideDesktop={hideDesktop}>
                {header}
                {children}
                {footer}
            </StyledList>
        ) : (
            noResultComponent
        )}
    </Fragment>
)

List.propTypes = {
    /** Child elements of list */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Custom header component that will be rendered above list */
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Custom footer component that will be rendered below list */
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Show bordered list */
    bordered: PropTypes.bool,
    /** Value that describes is there any items to render */
    noResult: PropTypes.bool,
    /** Component that appears when is no items to render */
    noResultComponent: PropTypes.node,
    hideDesktop: PropTypes.bool
}

List.defaultProps = {
    children: null,
    header: null,
    footer: null,
    bordered: true,
    noResultComponent: null,
    noResult: false,
    hideDesktop: false
}

export default List
