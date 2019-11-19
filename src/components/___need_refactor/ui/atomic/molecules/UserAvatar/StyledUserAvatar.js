import styled from 'styled-components'
import { colors, fonts } from '../../../../../styles/global-styles'

const { white } = colors

const sizes = {
    small: '1.5rem',
    normal: '2rem',
    large: '2.5rem'
}

const avatarStyles = (size, bordered, borderColor) => `
  width: ${sizes[size]};
  height: ${sizes[size]};
  border-radius: 50%;
  border: ${bordered ? `2px solid ${borderColor}` : 0};
`

export const StyledImageAvatar = styled.div`
  ${({ size, bordered, borderColor }) =>
        avatarStyles(size, bordered, borderColor)} background-size: cover;
  background-image: url(${({ src }) => src || 'none'});
`

export const StyledTextAvatar = styled.div`
  ${({ size, bordered, borderColor }) =>
        avatarStyles(size, bordered, borderColor)} display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${fonts.primary};
  font-size: ${({ size }) => (size === 'small' ? '0.5rem' : '1rem')};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  color: ${white};
  background-color: ${({ bgColor }) => bgColor};
`
