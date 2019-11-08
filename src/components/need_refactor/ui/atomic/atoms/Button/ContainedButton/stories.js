import { storiesOf } from '@storybook/react'
import React from 'react'
import ContainedButton from '.'

storiesOf('components/buttons/ContainedButton', module)
    .add('Default', () =>
        <ContainedButton>
            Hello
        </ContainedButton>)
    .add('Small', () =>
        <ContainedButton size='small'>
            Hello
        </ContainedButton>)
    .add('Large', () =>
        <ContainedButton size='large'>
            Hello
        </ContainedButton>)
