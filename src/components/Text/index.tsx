import React, { ReactNode } from 'react'
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
    center?: boolean;
    children?: ReactNode;
}

const Text: React.FC<Props> = (
    {
        color = Color.black,
        size = 'normal',
        font = Font.sanSerif,
        spacing = 'normal',
        bold = false,
        italic = false,
        uppercase = false,
        center = false,
        children
    }: Props
) => {
    if (size === 'small') {
        return <Small
            color={color}
            font={font}
            spacing={spacing}
            bold={bold}
            italic={italic}
            uppercase={uppercase}
            center={center}
        >
            {children}
        </Small>
    }

    return <Normal
        color={color}
        font={font}
        spacing={spacing}
        bold={bold}
        italic={italic}
        uppercase={uppercase}
        center={center}
    >
        {children}
    </Normal>
}

export default Text
