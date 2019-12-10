import { createGlobalStyle } from 'styled-components'

const GlobalFonts = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Literata:400,400i&display=swap');

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
`

export default GlobalFonts
