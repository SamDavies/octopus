import styled from 'styled-components'
import { colors } from '../../../../../../styles/global-styles'

export default styled.div`
  position: absolute;
  top: ${({ type }) => (type === 'radio' ? '6px' : '0')};
  left: 0;
  height: ${({ type }) => (type === 'radio' ? '16px' : '1.5rem')};
  width: ${({ type }) => (type === 'radio' ? '16px' : '1.5rem')};
  background-color: ${colors.white};
  border: 2px solid ${colors.black};
  transition: 0.3s;
  cursor: pointer;
  border-radius: 0;
  margin-bottom: 0;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`
