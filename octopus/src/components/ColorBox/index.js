import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
    background: ${({ hex }) => hex};
    color: ${({ name }) => name === 'black' ? 'white' : 'black'};
    border: 2px solid;
    border-color: ${({ hex }) => hex};
    height: 50px;
    width: 200px;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
`

const ColorBox = props => (
    <div>
        <StyledBox name={props.name} hex={props.hex}>
            <span>{props.name}</span>
            <span>{props.hex}</span>
        </StyledBox>
    </div>
)

ColorBox.propTypes = {
    name: PropTypes.string,
    hex: PropTypes.string
}

export default ColorBox
