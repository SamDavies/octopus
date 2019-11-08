import { storiesOf } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import PortfoliCard from '.'

const IMAGE_URL = 'https://lh3.googleusercontent.com/gtkJt3zubw77AEBZI-JTMCHcvmF0TcTj_GXRimCLV9NLWM7gMt8G6SZd8AQnjYF3s3g-pNpXwT_8wbCCcZDp1syf'

storiesOf('cards/components/PortfolioCard', module)
    .add('Default', () =>
        <MemoryRouter>
            <div style={{ width: '300px' }}>
                <PortfoliCard
                    src={IMAGE_URL}
                    subTitle='talent'
                    title='Gal Gadot'
                    followers={400000}
                />
            </div>
        </MemoryRouter>)
    .add('Bordered', () =>
        <MemoryRouter>
            <div style={{ width: '300px' }}>
                <PortfoliCard
                    src={IMAGE_URL}
                    subTitle='talent'
                    title='Gal Gadot'
                    followers={400000}
                    context='agency'
                />
            </div>
        </MemoryRouter>)
