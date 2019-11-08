import { storiesOf } from '@storybook/react'
import React from 'react'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Linkedin from './Linkedin'
import Pinterest from './Pinterest'
import Youtube from './Youtube'

storiesOf('components/icons/SocialIcons', module)
    .add('Facebook', () =>
        <Facebook width='100' height='100' color='black' />)
    .add('Instagram', () =>
        <Instagram width='100' height='100' color='black' />)
    .add('Linkedin', () =>
        <Linkedin width='100' height='100' color='black' />)
    .add('Pinterest', () =>
        <Pinterest width='100' height='100' color='black' />)
    .add('Youtube', () =>
        <Youtube width='100' height='100' color='black' />)
