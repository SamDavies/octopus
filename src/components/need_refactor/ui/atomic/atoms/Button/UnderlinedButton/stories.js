import { storiesOf } from '@storybook/react'
import React from 'react'
import UnderlinedButton from '.'

storiesOf('components/buttons/UnderlinedButton', module)
    .add('Default', () =>
        <UnderlinedButton>
            Hello
        </UnderlinedButton>)
    .add('Small', () =>
        <UnderlinedButton size='small'>
            Hello
        </UnderlinedButton>)
    .add('Large', () =>
        <UnderlinedButton size='large'>
            Hello
        </UnderlinedButton>)
