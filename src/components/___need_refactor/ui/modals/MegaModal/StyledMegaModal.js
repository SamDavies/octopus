import styled from 'styled-components'
import { colors } from '../../../../styles/global-styles'

const { black, white } = colors

export const StyledModalHead = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${black};
  color: ${white};
  display: flex;
  align-items: center;
  position: relative;
`

export const StyledLogoContainer = styled.div`
  max-width: 235px;
  margin: 0 auto;
`

export const StyledModalContent = styled.div`
  padding: 30px 0;
`
