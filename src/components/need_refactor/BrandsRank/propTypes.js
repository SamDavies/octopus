import PropTypes from 'prop-types'

export const optionProp = PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
})

export const brandProp = PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    delta: PropTypes.number,
    followers: PropTypes.number,
    logo: PropTypes.string,
    url: PropTypes.string
})
