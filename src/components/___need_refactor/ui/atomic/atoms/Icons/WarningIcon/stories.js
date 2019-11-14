import { storiesOf } from '@storybook/react'
import React from 'react'
import WarningIcon from './WarningIcon'

storiesOf('components/icons/WarningIcon', module)
    .add('Default', () =>
        <WarningIcon width='100' height='100' color='black' />)
