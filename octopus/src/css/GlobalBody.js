import { createGlobalStyle } from 'styled-components'

const GlobalBody = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
}
`

export default GlobalBody
