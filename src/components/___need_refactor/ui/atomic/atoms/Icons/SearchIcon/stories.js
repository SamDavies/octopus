import { storiesOf } from '@storybook/react'
import React from 'react'
import SearchIcon from './SearchIcon'

storiesOf('components/icons/SearchIcon', module)
    .add('Default', () =>
        <SearchIcon width='100' height='100' color='black' />)
