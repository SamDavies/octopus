import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import AbstractText from '../AbstractText'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'

const Normal = styled.div`
    ${AbstractText};
    font-size: 16px;
`

const Small = styled.div`
    ${AbstractText};
    font-size: 13px;
`

type Props = {
    size?: 'normal' | 'small';
    font?: Font;
    spacing?: 'normal' | 'wide';
    color?: Color;
    bold?: boolean;
    uppercase?: boolean;
    italic?: boolean;
}

const Text: React.FC<Props> = (props: PropsWithChildren<Props>) => {
    if (props.size === 'small') {
        return <Small {...props}>
            {props.children}
        </Small>
    }

    return <Normal {...props}>
        {props.children}
    </Normal>
}

Text.defaultProps = {
    color: Color.black,
    size: 'normal',
    font: Font.sanSerif,
    spacing: 'normal',
    bold: false,
    italic: false,
    uppercase: false
}

export default Text
