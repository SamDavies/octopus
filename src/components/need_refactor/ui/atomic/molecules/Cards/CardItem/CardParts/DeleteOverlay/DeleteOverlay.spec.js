import React from 'react'
import { shallow } from 'enzyme'
import Component from './DeleteOverlay'

describe('DeleteOverlay component', () => {
    const defaultProps = {
        message: 'Text message',
        onConfirmClick: jest.fn(),
        onCancelClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('handle click on overlay', () => {
        const wrapper = getWrapper()
        const ev = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn()
        }
        wrapper.instance().handleOverlayClick = jest.fn()
        wrapper.instance().handleOverlayClick(ev)
        expect(wrapper.instance().handleOverlayClick).toHaveBeenCalled()
    })
})
