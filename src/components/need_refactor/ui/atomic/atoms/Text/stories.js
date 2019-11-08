import { storiesOf } from '@storybook/react'
import React from 'react'
import Text from './Text'

storiesOf('components/typography/Text', module)
    .add('Default', () =>
        <Text>Hello</Text>)
    .add('Small', () =>
        <Text size='small'>Hello</Text>)
    .add('Large', () =>
        <Text size='large'>Hello</Text>)
    .add('Extra Large', () =>
        <Text size='extraLarge'>Hello</Text>)
    .add('Bold', () =>
        <Text bold>Hello</Text>)
    .add('Underline', () =>
        <Text underline>Hello</Text>)
    .add('Inverted', () =>
        <Text inverted>Hello</Text>, {
        backgrounds: [{
            name: 'black', value: 'rgba(0, 0, 0)'
        }]
    })
