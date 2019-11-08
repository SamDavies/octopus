import { storiesOf } from '@storybook/react'
import React from 'react'
import ModalTitle from './ModalTitle'

storiesOf('components/modal/ModalTitle', module)
    .add('Default', () =>
        <ModalTitle title='Hello' />)
