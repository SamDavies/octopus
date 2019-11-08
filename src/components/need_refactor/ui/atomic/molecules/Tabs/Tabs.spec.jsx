import React from 'react'
import { shallow } from 'enzyme'
import Component from './Tabs'
import { Tab } from './StyledTabs'

describe('Tabs component tests', () => {
    const defaultProps = {
        tabs: [
            {
                id: 'foo',
                label: 'Foo'
            }
        ],
        onTabClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should match snapshot', () => {
        const wrapper = getWrapper()
        wrapper.find(Tab).simulate('click')
        expect(defaultProps.onTabClick).toHaveBeenCalledWith('foo')
        expect(defaultProps.onTabClick).toHaveBeenCalledTimes(1)
    })
})
