import React, { Fragment } from 'react'
import GlobalBody from './GlobalBody'
import GlobalFonts from './GlobalFonts'
import GlobalReset from './GlobalReset'

const GlobalStyles = () =>
    <Fragment>
        <GlobalFonts/>
        <GlobalReset/>
        <GlobalBody/>
    </Fragment>

export default GlobalStyles
