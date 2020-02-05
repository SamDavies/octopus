/* eslint-disable */
import React, { Fragment } from 'react'

const DemoElement = (props) => (
    <Fragment>
        <img src={props.src} />
        <div>{props.text}</div>
    </Fragment>
)

export default DemoElement