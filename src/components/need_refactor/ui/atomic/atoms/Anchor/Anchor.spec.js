import React from 'react'
import { shallow } from 'enzyme'
import Component from '.'

describe('Anchor atom test', () => {
    const defaultProps = {
        href: '#anchor',
        children: 'Content'
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should return correct properties', () => {
        const wrapper = getWrapper()
        expect(wrapper.prop('to')).toBeDefined()
        expect(wrapper.prop('children')).toBeDefined()
        expect(wrapper.prop('to')).toEqual(defaultProps.href)
        expect(wrapper.prop('children')).toEqual(defaultProps.children)
    })
})
