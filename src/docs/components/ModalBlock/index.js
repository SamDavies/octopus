import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import Button, { StyledButton } from '../../../components/Button'
import BlockContainer from '../BlockContainer'

const ModalBlockWrapper = styled(BlockContainer)`
    ${StyledButton} {
        max-height: 100%;
    }

`
const ModalBlock = props => {
    const [showModal, setShowModal] = useState(false)
    return (
        <ModalBlockWrapper>
            <Button
                buttonType='primary'
                onClick={() => setShowModal(true)}
            >
                {props.buttonText}
            </Button>
            {props.children(showModal, setShowModal)}
        </ModalBlockWrapper>
    )
}

ModalBlock.propTypes = {
    buttonText: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default ModalBlock
