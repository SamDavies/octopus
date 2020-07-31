import React from 'react'
import styled from 'styled-components'
import AbstractText from '../AbstractText'
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const Normal = styled.div`
    ${AbstractText};
    font-size: 16px;
`

const Small = styled.div`
    ${AbstractText};
    font-size: 13px;
`

type Props = {
    size?: 'normal' | 'small',
    font?: Fonts,
    spacing?: 'normal' | 'wide',
    color?: Colors,
    bold?: boolean,
    uppercase?: boolean,
    italic?: boolean,
}

const Text: React.FC<Props> = (props) => {
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
    color: Colors.black,
    size: 'normal',
    font: Fonts.sanSerif,
    spacing: 'normal',
    bold: false,
    italic: false,
    uppercase: false
}

export default Text
