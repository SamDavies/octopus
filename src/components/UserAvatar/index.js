import initials from 'initials'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../styles'

const sizes = {
    small: '1.5rem',
    normal: '2rem',
    large: '2.5rem'
}

const avatarStyles = (size, bordered, borderColor) => `
  width: ${sizes[size]};
  height: ${sizes[size]};
  border-radius: 50%;
  border: ${bordered ? `2px solid ${colors[borderColor]}` : 0};
`

export const StyledImageAvatar = styled.div`
  ${({ size, bordered, borderColor }) => avatarStyles(size, bordered, borderColor)} 
  background-size: cover;
  background-image: url(${({ src }) => src || 'none'});
`

export const StyledTextAvatar = styled.div`
  ${({ size, bordered, borderColor }) => avatarStyles(size, bordered, borderColor)}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${fonts.cera};
  font-size: ${({ size }) => (size === 'small' ? '0.5rem' : '1rem')};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${({ bgColor }) => colors[bgColor]};
`

const UserAvatar = ({ src, text, size, bordered, borderColor, bgColor }) => (
    <div>
        {src ? (
            <StyledImageAvatar
                size={size}
                src={src}
                bordered={bordered}
                borderColor={borderColor}
            />
        ) : (
            <StyledTextAvatar
                size={size}
                bordered={bordered}
                borderColor={borderColor}
                bgColor={bgColor}
            >
                {initials(text)}
            </StyledTextAvatar>
        )}
    </div>
)

UserAvatar.propTypes = {
    /** user avatar image path */
    src: PropTypes.string,
    /** short name text */
    text: PropTypes.string,
    /** avatar size */
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    /** is avatar bordered */
    bordered: PropTypes.bool,
    /** custom border color */
    borderColor: PropTypes.string,
    /** custom background color */
    bgColor: PropTypes.string
}

UserAvatar.defaultProps = {
    src: '',
    text: '',
    size: 'normal',
    bordered: false,
    borderColor: 'white',
    bgColor: 'black'
}

export default UserAvatar
