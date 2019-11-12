import { storiesOf } from '@storybook/react'
import React from 'react'
import Button, { StyledButton } from '../components/Button'

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
    .add('Normal', () => (
        <StyledButton>Normal</StyledButton>
    ))
    .add('Normal disalbed', () => (
        <StyledButton disabled={true}>Normal disable</StyledButton>
    ))
    .add('Secondary', () => (
        <StyledButton buttonStyle='secondary'>Normal disable</StyledButton>
    ))
    .add('Secondary disable', () => (
        <StyledButton buttonStyle='secondary' disabled={true}>Normal disable</StyledButton>
    ))
    .add('Normal2', () => (
        <Button disabled={false}>Normal</Button>
    ))
    .add('Normal disalbed2', () => (
        <Button disabled={true}>Normal disable</Button>
    ))
    .add('Secondary2', () => (
        <Button buttonStyle='secondary'>Normal disable</Button>
    ))
    .add('Secondary disable2', () => (
        <div>
            <Button buttonStyle='coral'>Normal disable</Button>
            <Button buttonStyle='coral' inverse>Normal disable</Button>
            <Button buttonStyle='contained'>Normal disable</Button>
            <Button buttonStyle='underlined'>Normal disable</Button>
        </div>
    ))
