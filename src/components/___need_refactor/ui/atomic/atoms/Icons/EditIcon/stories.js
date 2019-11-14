import { storiesOf } from '@storybook/react'
import React from 'react'
import EditIcon from './EditIcon'

storiesOf('components/icons/EditIcon', module)
    .add('Default', () =>
        <EditIcon width='100' height='100' color='black' />)
