import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

interface CustomDocumentContext extends DocumentInitialProps {
    styles: React.ReactElement
}

class MyDocument extends Document {
    static async getInitialProps (ctx: DocumentContext): Promise<CustomDocumentContext> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render () {
        return <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument
