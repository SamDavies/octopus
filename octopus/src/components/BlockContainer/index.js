import styled from 'styled-components'

export default styled.div`
    display: block;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    ${({ inverted }) => inverted && `
        background: black;
        color: white;
    `}
`
