import { storiesOf } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Link from '../components/Link'

// const Wrapper = styled.div`
//     // width: 100%;
//     max-width: 500px;
//     font-size: 16px;
//     box-sizing: border-box;
//     padding: 5rem 5px;
//     margin: auto;
//     // height: 550px;
//     background: green;
//     position: relative;
//     display: block;
// `
// const CoolDiv = styled.div`
//     max-height: 300px;
//     height: 100%;
//     background: pink;
//     padding: 20px;
//     max-width: 300px;
//     margin: auto;
//     width: 100%;
//     position: relative;
//     display: block;
//     margin: auto;
// `

storiesOf('components/Button', module)

    .add('Normal disalbed2', () => (
        <MemoryRouter>
            <Link to="/a">Normal disable</Link>
        </MemoryRouter>
    ))
