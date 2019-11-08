import styled from 'styled-components'
import media from '../../../../utils/styleHelpers/mediaQuery'

export const StyledMinimalModal = styled.div`
  top: 0;
  margin: 0;
  padding: 0;
  height: ${({ isAutoHeight }) => (isAutoHeight ? 'auto' : '100%')};
`

export const StyledMinimalModalWrapper = styled.div`
  padding-bottom: 0;
  ${media.desktopLarge`background-size: cover;`};
`

export const StyledMinimalModalContent = styled.div`
  padding: 50px;
  width: 100%;
`
