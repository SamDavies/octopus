/* eslint-disable */
import React, { Fragment } from 'react'

export const DemoContent = (props) =>
    <Fragment>
        <img src={props.src} />
        <div>{props.text}</div>
    </Fragment>


export const DemoTrigger = (props) => (
    <button type='button'>
        {props.text}
    </button>
)
