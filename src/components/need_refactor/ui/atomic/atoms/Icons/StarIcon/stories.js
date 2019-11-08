import { storiesOf } from '@storybook/react'
import React from 'react'
import StarIcon from './StarIcon'

storiesOf('components/icons/StarIcon', module)
    .add('Default', () =>
        <StarIcon width='100' height='100' color='black' />)
