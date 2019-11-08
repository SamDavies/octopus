import { storiesOf } from '@storybook/react'
import React from 'react'
import AddIcon from './AddIcon'

storiesOf('components/icons/AddIcon', module)
    .add('Default', () =>
        <AddIcon width='100' height='100' color='black' />)
