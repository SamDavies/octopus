import React from 'react'
import PropTypes from 'prop-types'
import { imagesPath } from '../../../../../styles/global-styles'
import { EmojiCell, StyledEmoji } from './StyledEmoji'

const Emoji = ({ isOptionAvailable, name }) => (
    <EmojiCell plan={name}>
        <StyledEmoji
            src={`${imagesPath}/emojis/${
                isOptionAvailable ? 'cool_emoji.png' : 'dissapoint_emoji.png'
            }`}
            alt={isOptionAvailable ? 'Cool' : 'Dissapoint'}
        />
    </EmojiCell>
)

Emoji.propTypes = {
    /** Is option available in specific plan */
    isOptionAvailable: PropTypes.bool.isRequired,
    /** Name of the subscription plan */
    name: PropTypes.string.isRequired
}

export default Emoji
