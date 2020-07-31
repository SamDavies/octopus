import Font from '../../constants/fonts'
import Color from "../../constants/colors";

type Props = {
    font?: string | undefined
    color?: string | undefined
    spacing?: 'normal' | 'wide' | undefined
    bold?: boolean | undefined
    center?: boolean | undefined
    uppercase?: boolean | undefined
    italic?: boolean | undefined
}

const AbstractText = (
    {
        font = Font.sanSerif,
        color = Color.black,
        spacing = 'normal',
        bold = false,
        center = false,
        uppercase = false,
        italic = false,
    }: Props
): string => `
    color: ${color};
    position: relative;
    line-height: 150%;
    font-family: ${font};
    font-weight: ${bold ? 800 : 500};
    font-style: ${italic ? 'italic' : 'normal'};
    font-stretch: normal;
    letter-spacing: ${spacing === 'normal' ? 'normal' : '16px'};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    text-align: ${center ? 'center' : 'left'};
`

export default AbstractText
