import { storiesOf } from '@storybook/react'
import React from 'react'
import MenuIcon from './MenuIcon'

storiesOf('components/icons/MenuIcon', module)
    .add('Default', () =>
        <MenuIcon width='100' height='100' color='black' />)
