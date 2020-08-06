import styled from 'styled-components'
import AbstractText from '../AbstractText'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'

type Props = {
    size?: 'normal' | 'small';
    font?: Font;
    spacing?: 'normal' | 'wide';
    color?: Color;
    bold?: boolean;
    uppercase?: boolean;
    italic?: boolean;
    center?: boolean;
}

const Text = styled.div<Props>`
    ${AbstractText};
    font-size: ${(props): string => props.size === 'small' ? '13px' : '16px'};
`

export default Text
