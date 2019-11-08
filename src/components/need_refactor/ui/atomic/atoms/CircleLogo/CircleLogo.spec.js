import React from 'react'
import { shallow } from 'enzyme'
import Component from './CircleLogo'
import { StyledLogo } from './StyledCircleLogo'

describe('CircleLogo test', () => {
    const defaultProps = {
        onClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should match snapshot for custom maxWidth', () => {
        const wrapper = getWrapper()
        const Logo = wrapper.find(StyledLogo)
        Logo.simulate('click')
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
})
