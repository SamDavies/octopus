import initials from 'initials'
import React from 'react'
import styled from 'styled-components'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'

enum sizes {
    small= '1.5rem',
    normal= '2rem',
    large= '2.5rem'
}

const avatarStyles = (size: sizes, bordered: boolean, borderColor: Color): string => `
  width: ${size};
  height: ${size};
  border-radius: 50%;
  border: ${bordered ? `2px solid ${borderColor}` : 0};
`

type StyledImageAvatarProps = {
    size: sizes;
    bordered: boolean;
    borderColor: Color;
    src: string;
}

export const StyledImageAvatar = styled.div<StyledImageAvatarProps>`
  ${(props): string => avatarStyles(props.size, props.bordered, props.borderColor)};
  background-size: cover;
  background-image: url(${(props): string => props.src || 'none'});
`

type StyledTextAvatarProps = {
    size: sizes;
    bordered: boolean;
    borderColor: Color;
    bgColor: Color;
}

export const StyledTextAvatar = styled.div<StyledTextAvatarProps>`
  ${(props): string => avatarStyles(props.size, props.bordered, props.borderColor)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${Font.sanSerif};
  font-size: ${(props): string => (props.size === sizes.small ? '0.5rem' : '1rem')};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  color: ${Color.white};
  background-color: ${(props): string => props.bgColor};
`

const StyledAvatarWrapper = styled.div`
    position: relative;
`

type Props = {
    size?: sizes;
    text?: string;
    src?: string;
    bordered?: boolean;
    borderColor?: Color;
    bgColor?: Color;
}

const UserAvatar: React.FC<Props> = (
    {
        size = sizes.normal,
        text = '',
        src = '',
        bordered = false,
        borderColor = Color.white,
        bgColor = Color.black
    }: Props
) => (
    <StyledAvatarWrapper className='avatar-wrapper'>
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
    </StyledAvatarWrapper>
)

export default UserAvatar
