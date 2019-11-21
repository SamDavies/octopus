import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import modalAnimation from '../../../../../styles/keyframes'

const { white } = colors

// TODO: use these if you need a background-image instead og plain background-color
// const backgroundImage = 'background-image: url(/static/images/ui/signup-bg.svg);';
// const backgroundAttachment = 'background-attachment: local;';
// const backgroundPosition = 'background-position: 0px -5px;';
// const backgroundSize = 'background-size: cover;';

export const StyledModalWrapper = styled.div`
  background-image: none;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: ${({ transparent }) =>
        transparent ? 'hsla(0, 0%, 100%, 0.8)' : white};
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  opacity: 1;
  animation: ${modalAnimation} 0.2s ease-out;
`

export const StyledModal = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width && `${width}px`};
  margin: 0 auto;
`
