/* eslint-disable */
import React, { Fragment } from 'react'

const Image = (props) =>
    <Fragment>
        <img src={props.src} />
        <div>{props.text}</div>
    </Fragment>

export default Image
