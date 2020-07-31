import { createGlobalStyle } from 'styled-components'
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const GlobalTypography = createGlobalStyle`
    html, div, button, a {
        line-height: 1.5rem;
        color: ${Colors.black};
        font-size: 16px;
        font-family: ${Fonts.sanSerif};
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 100%;
    }
`

export default GlobalTypography
