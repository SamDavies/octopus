import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

const SiteHead = props => {
    const title = !props.title ? 'Octopus' : `${props.title} - Octopus`
    return <Head>
        <link key='icon-apple-touch-icon' rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link key='icon-small' rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link key='icon-large' rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link key='icon-manifest' rel='manifest' href='/site.webmanifest' />
        <link key='icon-mask-icon' rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta key='icon-msapplication-TileColor' name='msapplication-TileColor' content='#ffffff' />
        <meta key='icon-theme-color' name='theme-color' content='#ffffff' />

        <title key='title'>{title}</title>
        <meta key='char-set' charSet='utf-8' />
        <meta
            key='description'
            name='description'
            content={props.description}
        />

        <meta key='og-type' property='og:type' content='website' />
        <meta key='og-title' name='og:title' property='og:title' content={title} />
        <meta key='og-description' name='og:description' property='og:description' content={props.description} />
        <meta key='og-image' property='og:image' content={props.image} />
        <meta key='og-site-name' property='og:site_name' content='Octopus' />
        <meta key='og-type' property='og:type' content='website' />

        <meta key='twitter-card' name='twitter:card' content='summary' />
        <meta key='twitter-title' name='twitter:title' content={title} />
        <meta key='twitter-description' name='twitter:description' content={props.description} />
        <meta key='twitter-image' name='twitter:image' content={props.image} />
        <meta key='twitter-site' name='twitter:site' content='Octopus' />
        <meta key='twitter-creator' name='twitter:creator' content='@stylindex' />
    </Head>
}

SiteHead.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
}

SiteHead.defaultProps = {
    title: null,
    image: 'https://stylindex.com/android-chrome-512x512.png',
    description: 'Stylindex component library.'
}

export default SiteHead
