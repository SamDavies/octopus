import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import AbstractText from '../AbstractText'
import Font from '../../constants/fonts'
import Color from '../../constants/colors'

type Props = {
    level?: 1 | 2 | 3 | 4;
    font?: Font;
    color?: Color;
    spacing?: 'normal' | 'wide';
    bold?: boolean;
    center?: boolean;
    uppercase?: boolean;
    italic?: boolean;
}

const Heading1 = styled.h1<Props>`
    ${AbstractText};
    font-size: 42px;
`

const Heading2 = styled.h2<Props>`
    ${AbstractText};
    font-size: 32px
`

const Heading3 = styled.h3<Props>`
    ${AbstractText};
    font-size: 28px
`

const Heading4 = styled.h4<Props>`
    ${AbstractText};
    font-size: 24px;
`

const Heading: React.FC<Props> = (props: PropsWithChildren<Props>) => {
    if (props.level === 2) {
        return <Heading2 {...props}>
            {props.children}
        </Heading2>
    }

    if (props.level === 3) {
        return <Heading3 {...props}>
            {props.children}
        </Heading3>
    }

    if (props.level === 4) {
        return <Heading4 {...props}>
            {props.children}
        </Heading4>
    }

    return <Heading1 {...props}>
        {props.children}
    </Heading1>
}

Heading.defaultProps = {
    level: 1,
    font: Font.sanSerif,
    spacing: 'normal',
    color: Color.black,
    bold: false,
    center: false,
    italic: false,
    uppercase: false
}

export default Heading
