import { storiesOf } from '@storybook/react'
import React from 'react'
import Heading from '.'

storiesOf('components/typography/Heading', module)
    .add('Default', () =>
        <Heading>
            Hello
        </Heading>)
    .add('Inverted', () =>
        <Heading inverted>
            Hello
        </Heading>, {
        backgrounds: [{
            name: 'black', value: 'rgba(0, 0, 0)'
        }]
    })
