import React from 'react'
import { shallow } from 'enzyme'
import Component from './ListOption'

describe('ListOption component tests', () => {
    const defaultProps = {
        bordered: false,
        onClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props}>
            test
        </Component>)
    }

    it('should handle component onClick event', () => {
        const wrapper = getWrapper()
        wrapper.simulate('click')
        expect(defaultProps.onClick).toHaveBeenCalled()
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })
})
