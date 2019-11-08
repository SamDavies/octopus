import { storiesOf } from '@storybook/react'
import React from 'react'
import InstagramIcon from './InstagramIcon'

storiesOf('components/icons/InstagramIcon', module)
    .add('Default', () =>
        <InstagramIcon width='100' height='100' color='black' />)
