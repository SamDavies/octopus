import { storiesOf } from '@storybook/react'
import React from 'react'
import CoralButton from '.'

storiesOf('components/buttons/CoralButton', module)
    .add('Default', () =>
        <CoralButton>
            Hello
        </CoralButton>)
    .add('Small', () =>
        <CoralButton size='small'>
            Hello
        </CoralButton>)
    .add('Large', () =>
        <CoralButton size='large'>
            Hello
        </CoralButton>)
