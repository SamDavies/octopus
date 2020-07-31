import initials from 'initials'
import React from 'react'
import styled from 'styled-components'
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

enum sizes {
    small= '1.5rem',
    normal= '2rem',
    large= '2.5rem'
}


const avatarStyles = (size: sizes, bordered: boolean, borderColor: Colors) => `
  width: ${size};
  height: ${size};
  border-radius: 50%;
  border: ${bordered ? `2px solid ${borderColor}` : 0};
`


type StyledImageAvatarProps = {
    size: sizes,
    bordered: boolean,
    borderColor: Colors,
    src: string,
}

export const StyledImageAvatar = styled.div<StyledImageAvatarProps>`
  ${props => avatarStyles(props.size, props.bordered, props.borderColor)};
  background-size: cover;
  background-image: url(${props => props.src || 'none'});
`

type StyledTextAvatarProps = {
    size: sizes,
    bordered: boolean,
    borderColor: Colors,
    bgColor: Colors,
}

export const StyledTextAvatar = styled.div<StyledTextAvatarProps>`
  ${props => avatarStyles(props.size, props.bordered, props.borderColor)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${Fonts.sanSerif};
  font-size: ${props => (props.size === sizes.small ? '0.5rem' : '1rem')};
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  color: ${Colors.white};
  background-color: ${props => props.bgColor};
`

const StyledAvatarWrapper = styled.div`
    position: relative;
`

type Props = {
    size: sizes,
    text: string,
    src: string,
    bordered: boolean,
    borderColor: Colors,
    bgColor: Colors,
}

const UserAvatar: React.FC<Props> = (props: Props) => (
    <StyledAvatarWrapper className='avatar-wrapper'>
        {props.src ? (
            <StyledImageAvatar
                size={props.size}
                src={props.src}
                bordered={props.bordered}
                borderColor={props.borderColor}
            />
        ) : (
            <StyledTextAvatar
                size={props.size}
                bordered={props.bordered}
                borderColor={props.borderColor}
                bgColor={props.bgColor}
            >
                {initials(props.text)}
            </StyledTextAvatar>
        )}
    </StyledAvatarWrapper>
)

UserAvatar.defaultProps = {
    src: '',
    text: '',
    size: sizes.normal,
    bordered: false,
    borderColor: Colors.white,
    bgColor: Colors.black
}

export default UserAvatar
