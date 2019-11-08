import React from 'react'
import { shallow } from 'enzyme'
import Component from '.'

describe('Default button test', () => {
    const defaultProps = {
        children: 'Button text',
        onClick: jest.fn(),
        handleSelectChange: jest.fn(),
        text: ''
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should trigger click event', () => {
        const wrapper = getWrapper()
        wrapper.simulate('click')
        expect(defaultProps.onClick).toHaveBeenCalled()
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })
})
