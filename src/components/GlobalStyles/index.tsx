import React, { Fragment } from 'react'
import GlobalTypography from './GlobalTypography'
import GlobalFonts from './GlobalFonts'
import GlobalReset from './GlobalReset'

const GlobalStyles: React.FC = () =>
    <Fragment>
        <GlobalFonts />
        <GlobalReset />
        <GlobalTypography />
    </Fragment>

export default GlobalStyles
