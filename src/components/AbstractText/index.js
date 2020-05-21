import fonts from '../../constants/fonts'

const AbstractText = props => `
    color: ${props.colour};
    position: relative;
    line-height: 150%;
    font-family: ${fonts[props.font]};
    font-weight: ${props.bold ? 800 : 500};
    font-style: ${props.italic ? 'italic' : 'normal'};
    font-stretch: normal;
    letter-spacing: ${props.spacing === 'normal' ? 'normal' : '16px'};
    text-transform: ${props.uppercase ? 'uppercase' : 'none'};
`

export default AbstractText
