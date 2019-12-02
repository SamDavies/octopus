import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { fonts } from '@stylindex/octopus'

const StyledWrapper = styled.div`
    font-family: ${props => fonts[props.fontFamily]};
    font-weight: ${props => props.weight};
    font-style: ${props => props.fontStyle};
    font-size: 16px;
    h2 {
        font-weight: inherit;
        font-size: 150%;
        font-style: inherit;
        font-family: inherit;
    }
`

const FontDemo = props => (
    <StyledWrapper
        fontFamily={props.family}
        weight={props.weight}
        fontStyle={props.fontStyle}>
        <h2>{props.name}</h2>
        <div>{props.usage}</div>
    </StyledWrapper>
)

FontDemo.propTypes = {
    name: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    usage: PropTypes.string.isRequired,
    weight: PropTypes.string,
    fontStyle: PropTypes.string
}
FontDemo.defaultProps = {
    weight: 'normal',
    fontStyle: 'normal'
}

export default FontDemo
