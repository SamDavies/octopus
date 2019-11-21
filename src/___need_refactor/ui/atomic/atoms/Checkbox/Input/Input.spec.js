import React from 'react'
import { shallow } from 'enzyme'
import Component from './Input'

describe('Checkbox input component test', () => {
    const defaultProps = {
        type: 'checkbox',
        name: 'value',
        disabled: false,
        checked: false,
        onChange: jest.fn(),
        value: '',
        id: 'value'
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should handle Checkbox change event', () => {
        const wrapper = getWrapper()
        wrapper.simulate('change')
        expect(defaultProps.onChange).toHaveBeenCalled()
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    })
})
