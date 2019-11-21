import React from 'react'
import { shallow } from 'enzyme'

import Component from './LoadMorePortfolioButton'
import { LoadMoreButton } from './StyledMasonryGrid'

describe('LoadMorePortfolioButton component test', () => {
    const defaultProps = {
        onLoadMoreClick: jest.fn()
    }

    const getWrapper = (testProps = {}) => {
        const props = { ...defaultProps, ...testProps }
        return shallow(<Component {...props} />)
    }

    it('should render a button with the correct props', () => {
        const wrapper = getWrapper()

        const button = wrapper.find(LoadMoreButton)
        expect(button).toHaveLength(1)

        button.simulate('click')

        expect(defaultProps.onLoadMoreClick).toHaveBeenCalled()
    })
})
