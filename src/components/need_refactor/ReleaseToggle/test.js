import { cleanup, render } from '@testing-library/react'
import React from 'react'
import ReleaseToggle from '.'
import { DEPLOYMENTS } from '../../config'

afterEach(cleanup)

describe('ReleaseToggle', () => {
    it('should render when not excludes', async () => {
        // When
        const { queryByTestId } = render(<ReleaseToggle exclude={[DEPLOYMENTS.PRODUCTION]}>
            <div data-testid='yo' />
        </ReleaseToggle>)

        // Then
        expect(queryByTestId('yo')).not.toBe(null)
    })

    it('should not render when excluded', async () => {
        // When
        const { queryByTestId } = render(<ReleaseToggle exclude={[DEPLOYMENTS.DEVELOPMENT]}>
            <div data-testid='yo' />
        </ReleaseToggle>)

        // Then
        expect(queryByTestId('yo')).toBe(null)
    })
})
