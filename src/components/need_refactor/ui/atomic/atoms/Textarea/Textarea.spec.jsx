import React from 'react'
import { shallow } from 'enzyme'

import Component from './Textarea'
import { StyledTextarea } from './StyledTextarea'

describe('StyledText atom test', () => {
    const defaultProps = {
        value: 'foo',
        onChange: jest.fn(),
        placeholder: 'placeholder',
        maxLength: null,
        id: 'id',
        name: 'name'
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should handle onChange event', () => {
        const wrapper = getWrapper()
        const input = wrapper.find(StyledTextarea)
        input.simulate('change', { target: { value: 'some text' } })
        expect(defaultProps.onChange).toHaveBeenCalled()
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    })
})
