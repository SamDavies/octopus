/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const StyledLogo = styled.img`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  border-radius: 50%;
  height: ${({ maxWidth }) => maxWidth};
`
