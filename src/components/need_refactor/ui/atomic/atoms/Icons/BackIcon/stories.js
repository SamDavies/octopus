import { storiesOf } from '@storybook/react'
import React from 'react'
import BackIcon from './BackIcon'

storiesOf('components/icons/BackIcon', module)
    .add('Default', () =>
        <BackIcon width='100' height='100' color='black' />)
