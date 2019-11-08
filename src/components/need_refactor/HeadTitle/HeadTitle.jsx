import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import locale from '../../localisation/en-gb.json'

const {
    titleSuffix,
    defaultTitle,
    defaultMetaDescription
} = locale.header

function HeadTitle ({ title, description }) {
    return (
        <Helmet>
            <title>
                {title} | {titleSuffix}
            </title>
            <meta name='description' content={description} />
        </Helmet>
    )
}

HeadTitle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}
HeadTitle.defaultProps = {
    title: defaultTitle,
    description: defaultMetaDescription
}

export default HeadTitle
