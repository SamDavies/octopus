import { shallow } from 'enzyme'
import React from 'react'
import { StyledCancelButton, StyledDeleteButton } from './StyledDeleteOverlay'

describe('StyledDeleteButton component', () => {
    const defaultProps = {
        onClick: jest.fn(),
        onConfirmClick: jest.fn(),
        onCancelClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<StyledDeleteButton {...props} />)
    }

    it('should handle confirm click event', () => {
        const wrapper = getWrapper()
        wrapper.simulate('click')
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
})

describe('StyledCancelButton component', () => {
    const defaultProps = {
        onClick: jest.fn(),
        onConfirmClick: jest.fn(),
        onCancelClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<StyledCancelButton {...props} />)
    }

    it('should handle cancel click event', () => {
        const wrapper = getWrapper()
        wrapper.simulate('click')
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
})
