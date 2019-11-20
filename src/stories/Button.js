import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { MemoryRouter } from 'react-router-dom'
import Textarea from '../components/Textarea'
import '../static/css/fonts.css'
import '../static/css/styles.css'
// import CloseButton from '../components/___need_refactor/ui/atomic/atoms/CloseButton'

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

const CoolDiv = () => {
    const [thing, setThing] = useState('')
    const options = Array.from(Array(6).keys()).map(x => ({
        id: String(x),
        name: String(x),
        value: String(x)
    }))

    return <Textarea value={thing} error="not cool" onChange={e => setThing(e.target.value) } maxLength={50} />
}
const CoolDiv2 = () => {
    const [thing, setThing] = useState('')
    const options = Array.from(Array(6).keys()).map(x => ({
        id: String(x),
        name: String(x),
        value: String(x)
    }))

    return <Textarea value={thing} onChange={e => setThing(e.target.value) } maxLength={50} />
}

storiesOf('components/Button', module)

    .add('Normal disalbed2', () => (
        <MemoryRouter>
            <CoolDiv />
        </MemoryRouter>
    ))
    .add('Normal disalbed', () => (
        <MemoryRouter>
            <CoolDiv2 />
        </MemoryRouter>
    ))
