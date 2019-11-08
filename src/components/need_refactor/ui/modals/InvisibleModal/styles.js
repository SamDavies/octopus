import styled from 'styled-components'
import media from '../../../../utils/styleHelpers/mediaQuery'

export const StyledInvisibleModal = styled.div`
  top: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
`

export const StyledInvisibleModalWrapper = styled.div`
  padding-bottom: 0;
  box-sizing: border-box;
  ${media.desktopLarge`background-size: cover;`};
`

export const StyledInvisibleModalContent = styled.div`
  position: relative;
  box-sizing: border-box;
  max-height: 100vh;
  height: 100%;
  width: 100%;
`
