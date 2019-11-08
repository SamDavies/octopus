import { storiesOf } from '@storybook/react'
import React from 'react'
import DefaultButton from '.'

storiesOf('components/buttons/DefaultButton', module)
    .add('Default', () =>
        <DefaultButton>
            Hello
        </DefaultButton>)
    .add('Inverted', () =>
        <DefaultButton inverted>
            Hello
        </DefaultButton>)
    .add('Disabled', () =>
        <DefaultButton disabled>
            Hello
        </DefaultButton>)
    .add('Disabled and Inverted', () =>
        <DefaultButton disabled inverted>
            Hello
        </DefaultButton>)
