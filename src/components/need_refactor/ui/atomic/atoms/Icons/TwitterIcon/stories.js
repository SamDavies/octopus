import { storiesOf } from '@storybook/react'
import React from 'react'
import TwitterIcon from './TwitterIcon'

storiesOf('components/icons/TwitterIcon', module)
    .add('Default', () =>
        <TwitterIcon width='100' height='100' color='black' />)
