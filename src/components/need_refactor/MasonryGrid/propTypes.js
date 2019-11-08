/* eslint-disable import/prefer-default-export */

import PropTypes from 'prop-types'

export const gridItemProp = PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    collaborator: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            key: PropTypes.string,
            primary_category_name: PropTypes.string,
            full_name: PropTypes.string
        })
    )
})
