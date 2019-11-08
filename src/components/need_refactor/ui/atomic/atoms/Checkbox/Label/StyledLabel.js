import styled from 'styled-components'
import { fonts, colors } from '../../../../../../styles/global-styles'

export default styled.span`
  display: inline-block;
  position: relative;
  padding-left: 2.25rem;
  font-family: ${fonts.primary};
  font-size: 13px;
  font-weight: bold;
  line-height: 2.25;
  color: ${colors.black};
  cursor: pointer;
`
