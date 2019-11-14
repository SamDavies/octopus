import { storiesOf } from '@storybook/react'
import React from 'react'
import CheckBox from './Checkbox'

storiesOf('components/inputs/CheckBox', module)
    .add('Default', () =>
        <CheckBox>
            Hello
        </CheckBox>)
    .add('Checked', () =>
        <CheckBox type='checkbox' checked='true'>
            Hello
        </CheckBox>)
    .add('Disabled', () =>
        <CheckBox type='checkbox' disabled='true'>
            Hello
        </CheckBox>)

storiesOf('components/inputs/Radio', module)
    .add('Default', () =>
        <CheckBox>
            Hello
        </CheckBox>)
    .add('Checked', () =>
        <CheckBox type='radio' checked='true'>
            Hello
        </CheckBox>)
    .add('Disabled', () =>
        <CheckBox type='radio' disabled='true'>
            Hello
        </CheckBox>)
