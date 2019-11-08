import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import Anchor from '../../atoms/Anchor'

const MarkdownComponent = ({ content }) => (
    <div >
        <Markdown
            source={content}
            escapeHtml={false}
            renderers={{ link: Anchor }}
        />
    </div>
)

MarkdownComponent.propTypes = {
    content: PropTypes.string.isRequired
}

export default MarkdownComponent
