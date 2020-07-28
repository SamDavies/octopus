import { createGlobalStyle } from 'styled-components'

const GlobalFonts = createGlobalStyle`
    /*
     * This looks like weŕe loading all the fonts
     * However, browsers are smart and normally prioritise fonts
     * that are used on the page.
     * 
     * All of these fonts will be required in the App.
     */
    
    @font-face {
        font-family: 'CeraPro';
        src: url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-BoldItalic.woff2') format('woff2'),
            url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'CeraPro';
        src: url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-MediumItalic.woff2') format('woff2'),
            url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-MediumItalic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'CeraPro';
        src: url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-Medium.woff2') format('woff2'),
            url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'CeraPro';
        src: url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-Bold.woff2') format('woff2'),
            url('https://octopus-static.stylindex.now.sh/fonts/CeraPro-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Literata';
        src: url('https://octopus-static.stylindex.now.sh/fonts/Literata-Italic.woff2') format('woff2'),
            url('https://octopus-static.stylindex.now.sh/fonts/Literata-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'Literata';
        src: url('https://octopus-static.stylindex.now.sh/fonts/Literata-Regular.woff2') format('woff2'),
            url('https://octopus-static.stylindex.now.sh/fonts/Literata-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    * {
        box-sizing: border-box;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .literata-subtype {
        font-family: "Literata";
    }
`

export default GlobalFonts
