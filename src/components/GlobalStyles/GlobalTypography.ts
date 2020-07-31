import { createGlobalStyle } from 'styled-components'
import Color from "../../constants/colors";
import Font from "../../constants/fonts";

const GlobalTypography = createGlobalStyle`
    html, div, button, a {
        line-height: 1.5rem;
        color: ${Color.black};
        font-size: 16px;
        font-family: ${Font.sanSerif};
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 100%;
    }
`

export default GlobalTypography
