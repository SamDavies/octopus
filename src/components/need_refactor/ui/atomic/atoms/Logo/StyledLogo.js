import styled, { css } from 'styled-components'

const logoSizes = {
    default: css`
    width: 100%;
  `,
    normal: css`
    margin: 0 auto;
    width: 320px;
  `,
    header: css`
    margin: 0 auto;
    width: 250px;
    max-width: 80%;
  `
}

export default styled.div`
  position: relative;
  ${({ size }) => logoSizes[size]};
`
