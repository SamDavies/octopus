import { storiesOf } from '@storybook/react'
import React from 'react'
import SelectIcon from './SelectIcon'

storiesOf('components/icons/SelectIcon', module)
    .add('Default', () =>
        <SelectIcon width='100' height='100' color='black' />)
