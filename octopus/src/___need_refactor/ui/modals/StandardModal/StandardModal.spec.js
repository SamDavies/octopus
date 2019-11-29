import React from 'react'
import { shallow } from 'enzyme'
import StandardModal from './StandardModal'

describe('StandardModal component', () => {
    const defaultProps = {
        visible: true,
        onCancel: jest.fn(),
        children: <p className='content'>content</p>
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<StandardModal {...props} />)
    }

    it('should render with children', () => {
        const wrapper = getWrapper()
        expect(wrapper.find('.content')).toHaveLength(1)
    })
})
