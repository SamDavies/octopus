import { storiesOf } from '@storybook/react'
import React from 'react'
import CloseIcon from './CloseIcon'

storiesOf('components/icons/CloseIcon', module)
    .add('Default', () =>
        <CloseIcon width='100' height='100' color='black' />)
