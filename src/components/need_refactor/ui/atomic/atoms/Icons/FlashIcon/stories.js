import { storiesOf } from '@storybook/react'
import React from 'react'
import FlashIcon from './FlashIcon'

storiesOf('components/icons/FlashIcon', module)
    .add('Default', () =>
        <FlashIcon width='100' height='100' color='black' />)
