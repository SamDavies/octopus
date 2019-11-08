import { storiesOf } from '@storybook/react'
import React from 'react'
import AccordionItem from '.'

storiesOf('components/elements/AccordionItem', module)
    .add('Default', () =>
        <AccordionItem title='Expand me'>
            <div>Hello Testing</div>
            <div>Hello Testing Again</div>
        </AccordionItem>)
