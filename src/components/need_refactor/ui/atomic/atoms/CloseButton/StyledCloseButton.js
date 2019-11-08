import { colors } from '../../../../../styles/global-styles'
import styled from 'styled-components'

const { gray } = colors

const StyledCloseButton = styled.button`
  display: block;
  cursor: pointer;
  border: 0;
  background: transparent;
  width: 56px;
  height: 56px;
  position: absolute;
  z-index: 10;
  top: 0;
  top: ${({ inverted }) => (inverted ? '13px' : '0')};
  right: ${({ position }) => (position === 'right' ? '0' : 'auto')};
  left: ${({ position }) => (position === 'left' ? '0' : 'auto')};
  text-decoration: none;
  outline: 0;
  padding: 0;

  &:hover {
    #close-icon {
      fill: ${gray};
    }
  }
`

export default StyledCloseButton
