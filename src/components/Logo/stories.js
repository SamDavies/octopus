import { storiesOf } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import Logo from './Logo'

const history = {}
storiesOf('components/logos/Logo', module)
    .addDecorator(story => <MemoryRouter history={history}>
        <Route path='/' component={story} />
    </MemoryRouter>)
    .add('Default', () =>
        <Logo />)
    .add('Header', () =>
        <Logo size='header' />)
