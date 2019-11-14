import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './Input'

storiesOf('components/inputs/Text', module)
    .add('Default', () =>
        <Input type='text' placeholder='Hello' />)
    .add('Disabled', () =>
        <Input type='text' placeholder='Hello' disabled='true' />)

storiesOf('components/inputs/Select', module)
    .add('Default', () =>
        <Input type='select'>
            <option value='hello'>Hello</option>
        </Input>)
    .add('Disabled', () =>
        <Input type='select' />)
