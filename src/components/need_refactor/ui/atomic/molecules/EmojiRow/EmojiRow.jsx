import React from 'react'
import Emoji from '../../../../components/ui/atomic/atoms/Emoji'
import PropTypes from 'prop-types'
import StyledEmojiRow from './StyledEmojiRow'

const EmojiRow = ({ option }) => (
    <StyledEmojiRow>
        {Object.values(option.plans).map(item => (
            <Emoji
                key={item.text}
                isOptionAvailable={item.available}
                name={item.text}
            />
        ))}
    </StyledEmojiRow>
)

EmojiRow.propTypes = {
    option: PropTypes.shape({
    /** Is function available in certain plan */
        available: PropTypes.string.isRequired,
        /** Plan name */
        text: PropTypes.string.isRequired
    }).isRequired
}

export default EmojiRow
