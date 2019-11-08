import styled, { css } from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'

export default styled.li`
  display: flex;
  width: 100%;
  color: ${colors.black};
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  ${({ bordered }) =>
        bordered &&
    css`
      border-radius: 0px;
      border: 2px solid ${colors.black};
      border-left: 0;
      border-right: 0;
    `};

  @media ${device.tablet} {padding: 1rem}
  @media ${device.tablet} {padding: 1rem 1.5rem}
`
