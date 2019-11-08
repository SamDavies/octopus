import React from 'react'
import { shallow } from 'enzyme'
import {
    FormContainer
} from './StyledContact'

describe('Container styled component test', () => {
    const defaultProps = {
        onSubmit: jest.fn()
    }
    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<FormContainer {...props} />)
    }

    it('should match default snapshot', () => {
        const wrapper = getWrapper()
        wrapper.simulate('submit')
        expect(defaultProps.onSubmit).toHaveBeenCalled()
    })
})
