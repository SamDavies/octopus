import { storiesOf } from '@storybook/react'
import React from 'react'
import TableRow from './TableRow'

storiesOf('components/elements/TableRow', module)
    .add('Default', () =>
        <TableRow>Hello</TableRow>)
