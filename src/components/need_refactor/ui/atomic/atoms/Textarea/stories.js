import { storiesOf } from '@storybook/react'
import React from 'react'
import Textarea from './Textarea'

storiesOf('components/inputs/Textarea', module)
    .add('Default', () =>
        <Textarea placeholder='Hello' />)
