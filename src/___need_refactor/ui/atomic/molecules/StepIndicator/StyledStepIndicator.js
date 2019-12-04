import styled from 'styled-components'
import { colors } from '../../../../../styles'

const { white, black } = colors

export const StyledStepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledStepItem = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? black : white)};
  border: solid 2px ${black};
`
