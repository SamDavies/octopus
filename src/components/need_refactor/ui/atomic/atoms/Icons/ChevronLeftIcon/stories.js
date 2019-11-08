import { storiesOf } from '@storybook/react'
import React from 'react'
import ChevronLeftIcon from './ChevronLeftIcon'

storiesOf('components/icons/ChevronLeftIcon', module)
    .add('Default', () =>
        <ChevronLeftIcon width='100' height='100' color='black' />)
