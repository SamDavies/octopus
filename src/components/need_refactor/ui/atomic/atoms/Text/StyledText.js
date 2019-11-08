import styled from 'styled-components'
import { colors, fonts } from '../../../../../styles/global-styles'

const { black, white, persimmon } = colors

const sizes = {
    small: {
        fontSize: 11,
        lineHeight: 1.27
    },
    normal: {
        fontSize: 13,
        lineHeight: 1.25
    },
    large: {
        fontSize: 16,
        lineHeight: 1.25
    },
    extraLarge: {
        fontSize: 40,
        lineHeight: 1.25
    }
}

const underlineStyle = `
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: ${black};
`

const StyledText = styled.p`
  position: relative;
  font-family: ${fonts.primary};
  font-size: ${({ size = 'normal' }) => sizes[size].fontSize}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 500)};
  font-style: normal;
  font-stretch: normal;
  line-height: ${({ size = 'normal' }) => sizes[size].lineHeight};
  letter-spacing: normal;
  color: ${({ inverted }) => (inverted ? white : black)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  margin: ${({ size = 'normal' }) => `0 0 ${sizes[size].fontSize / 2}px 0`};
  &:after {
    ${({ underline }) => underline && underlineStyle};
  }
`

export const StyledTextRed = styled(StyledText)`
  color: ${persimmon};
`

export default StyledText
