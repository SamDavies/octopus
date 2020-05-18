import { GlobalStyles } from '@stylindex/octopus'
import App from 'next/app'
import React from 'react'
import SiteHead from '../components/SiteHead'

class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return <div>
            <GlobalStyles/>
            <SiteHead/>
            <Component {...pageProps} />
        </div>
    }
}

export default MyApp
