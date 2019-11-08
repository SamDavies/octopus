import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import media from '../../../../../utils/styleHelpers/mediaQuery'

export const StyledList = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 27px;
  ${({ bordered }) =>
        bordered &&
    `
        border: 2px solid ${colors.black};
        border-left: 0;
        border-right: 0;
    `};

  ${
    ({ hideDesktop }) => hideDesktop && media.desktop`
        display: none;

    `
}
`

export default StyledList
