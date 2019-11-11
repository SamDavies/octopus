import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Tooltip } from '../components'

const Wrapper = styled.div`
    // width: 100%;
    max-width: 500px;
    font-size: 16px;
    box-sizing: border-box;
    padding: 5rem 5px;
    margin: auto;
    // height: 550px;
    background: green;
    position: relative;
    display: block;
`
const CoolDiv = styled.div`
    max-height: 300px;
    height: 100%;
    background: pink;
    padding: 20px;
    max-width: 300px;
    margin: auto;
    width: 100%;
    position: relative;
    display: block;
    margin: auto;
`

storiesOf('components/Tooltip', module)
    .add('leftt', () =>
        <Wrapper>
            <Tooltip tipText="test" position="left">
                <CoolDiv href="#">fooo</CoolDiv>
            </Tooltip>
        </Wrapper>)
    .add('right', () =>
        <Wrapper><Tooltip tipText={<div>
            <div>foo</div>
            <div>cool</div>
        </div>
        } position="right">
            <CoolDiv href="#">fooo</CoolDiv>
        </Tooltip></Wrapper>)
    .add('bottom', () =>
        <Wrapper><Tooltip tipText="test" position="bottom">
            <CoolDiv href="#">fooo</CoolDiv>
        </Tooltip></Wrapper>)
    .add('top', () =>
        <Wrapper><Tooltip tipText={[
            'a',
            'b',
            'c'
        ].join('\n')} position="top">
            <CoolDiv href="#">fooo</CoolDiv>
        </Tooltip></Wrapper>)
    .add('hide', () =>
        <Wrapper><Tooltip tipText="test" position="top" hideTip={true}>
            <CoolDiv href="#">fooo</CoolDiv>
        </Tooltip></Wrapper>)
