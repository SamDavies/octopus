import initials from 'initials'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from '../../../../../styles/global-styles'
import { StyledImageAvatar, StyledTextAvatar } from './StyledUserAvatar'

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
    borderColor: colors.white,
    bgColor: colors.black
}

export default UserAvatar
