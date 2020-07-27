import styled from 'styled-components'
import Colors from "../../constants/colors";

type Props = {
    noPadding: boolean
}

const Box = styled.div<Props>`
    background-color: #ffffff;
    border: solid 2px ${Colors.black};

    ${(props): string | null => !props.noPadding ? `
        padding: 20px;
    `: null}
`

Box.defaultProps = {
    noPadding: false
}

export default Box
