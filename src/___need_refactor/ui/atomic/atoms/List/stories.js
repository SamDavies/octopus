import { storiesOf } from '@storybook/react'
import React from 'react'
import List from './List'

storiesOf('components/elements/List', module)
    .add('Default', () =>
        <List>
            <li>Hello</li>
            <li>Hello, again</li>
        </List>)
    .add('NoBorder', () =>
        <List bordered='false'>
            <li>Hello</li>
            <li>Hello, again</li>
        </List>)
    .add('NoResult', () =>
        <List noResult='true'>
            <li>Hello</li>
            <li>Hello, again</li>
        </List>)
