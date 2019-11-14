import { storiesOf } from '@storybook/react'
import React from 'react'
import FavoriteIcon from './FavoriteIcon'

storiesOf('components/icons/FavoriteIcon', module)
    .add('Default', () =>
        <FavoriteIcon width='100' height='100' color='black' />)
