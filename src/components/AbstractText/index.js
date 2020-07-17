import fonts from '../../constants/fonts'
import { letterSpacing } from '../../constants/spacing'

const AbstractText = props => `
    color: ${props.color};
    position: relative;
    line-height: 150%;
    font-family: ${fonts[props.font]};
    font-weight: ${props.bold ? 800 : 500};
    font-style: ${props.italic ? 'italic' : 'normal'};
    font-stretch: normal;
    letter-spacing: ${letterSpacing[props.spacing]};
    text-transform: ${props.uppercase ? 'uppercase' : 'none'};
    text-align: ${props.center ? 'center' : 'left'};
`

export default AbstractText
