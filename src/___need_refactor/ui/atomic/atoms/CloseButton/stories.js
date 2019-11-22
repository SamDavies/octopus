import { storiesOf } from '@storybook/react'
import React from 'react'
import CloseButton from '.'

storiesOf('components/buttons/CloseButton', module)
    .add('Default', () => <CloseButton />
    )
    .add('Inverted', () => <CloseButton inverted onClick={() => {}} />, {
        backgrounds: [{
            name: 'black', value: 'rgba(0, 0, 0)'
        }]
    })
