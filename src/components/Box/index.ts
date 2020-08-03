import styled from 'styled-components'
import Color from '../../constants/colors'

type Props = {
    noPadding?: boolean;
}

const Box = styled.div<Props>`
    background-color: #ffffff;
    border: solid 2px ${Color.black};

    ${(props): string | null => !props.noPadding ? `
        padding: 20px;
    ` : null}
`

Box.defaultProps = {
    noPadding: false
}

export default Box
