import React from 'react'
import { shallow } from 'enzyme'
import Component from '.'

describe('MarkdownComponent molecule test', () => {
    const defaultProps = {
        content:
      '**Mollit laboris do qui laborum deserunt proident labore eu qui.**'
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should match markdown content', () => {
        const wrapper = getWrapper()
        const markdown = wrapper.find('ReactMarkdown')
        expect(markdown).toHaveLength(1)
        expect(markdown.props().source).toBeDefined()
        expect(markdown.props().source).toEqual(defaultProps.content)
    })
})
