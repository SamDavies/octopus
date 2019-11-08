import { storiesOf } from '@storybook/react'
import React from 'react'
import CheckIcon from './CheckIcon'

storiesOf('components/icons/CheckIcon', module)
    .add('Default', () =>
        <CheckIcon width='100' height='100' color='black' />)
