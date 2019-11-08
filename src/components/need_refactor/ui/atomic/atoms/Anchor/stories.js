import { storiesOf } from '@storybook/react'
import React from 'react'
import Anchor from '.'

storiesOf('components/elements/Anchor', module)
    .add('Default', () =>
        <Anchor href='/'>Testing Anchor</Anchor>)
