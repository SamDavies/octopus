import styled, { css } from 'styled-components'
import { colors } from '../../../../../../styles/global-styles'
import { device } from '../../../../../../styles/mediaQueries'
import StyledCheckMark from '../CheckMark/StyledCheckMark'

const checkerAfter = css`
  display: block;
  left: 4px;
  top: 1px;
  width: 0.45rem;
  height: 0.75rem;
  border: solid ${colors.white};
  border-width: 0px 3px 3px 0px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  @media ${device.desktop} {
    left: 7px;
    top: 3px;
  }
`

const radioAfter = css`
  display: block;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: ${colors.black};
  border-radius: 0;
`

const inputAfterStyles = {
    radio: radioAfter,
    checkbox: checkerAfter
}

export default styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${StyledCheckMark} {
    background-color: ${({ type }) =>
        type !== 'radio' ? colors.black : 'initial'};

    &:after {
      ${({ type }) => inputAfterStyles[type]};
    }
  }

  &:disabled ~ ${StyledCheckMark} {
    box-shadow: none;
    cursor: auto;
  }
`
