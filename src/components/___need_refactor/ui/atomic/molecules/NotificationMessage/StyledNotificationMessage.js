import styled from 'styled-components'
import { fonts, colors } from '../../../../../styles/global-styles'

export default styled.div`
  display: flex;
  min-height: 3.5rem;
  align-items: center;
  justify-content: flex-start;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${colors.black};
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-size: 13px;
  font-weight: bold;
  line-height: 1.54;
  text-align: left;
  z-index: 9999;
  padding: 0 0.5rem;
`
