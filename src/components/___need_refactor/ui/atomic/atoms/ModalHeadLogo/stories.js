import { storiesOf } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import ModalHeadLogo from './ModalHeadLogo'

const history = {}
storiesOf('components/modal/ModalHeadLogo', module)
    .addDecorator(story => <MemoryRouter history={history}>
        <Route path='/' component={story} />
    </MemoryRouter>)
    .add('Default', () =>
        <ModalHeadLogo />)
