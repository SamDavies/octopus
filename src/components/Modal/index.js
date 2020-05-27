import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import React, { Fragment, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import styled, { createGlobalStyle } from 'styled-components'
import Box from '../Box'
import Button from '../Button'

// Prevent the background from scrolling
// https://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened
const GlobalBodyHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background: rgba(255,255,255, 0.5);
    backdrop-filter: blur(8px);
`

const Inner = styled.div`
    width: 600px;
    z-index: 2000;
`

const StyledBox = styled(Box)`
    position: relative;
`

const StyledCrossContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
    z-index: 3000;
`

const StyledCrossButton = styled(Button)`
    pointer-events: all;
    height: 50px;
    padding: 0;
`

const Modal = props => {
    const [show, setShow] = useState()

    const onClose = () => {
        setShow(false)
        props.onClose()
    }

    const onOpen = () => {
        setShow(true)
        props.onOpen()
    }
    return <Fragment>
        {show && <StyledContainer>
            <GlobalBodyHidden />
            <Inner>
                <StyledBox>
                    <StyledCrossContainer>
                        <StyledCrossButton
                            kind='ghost'
                            size='medium'
                            onClick={onClose}
                        >
                            <IoIosClose
                                fontSize={50}
                            />
                        </StyledCrossButton>
                    </StyledCrossContainer>
                    {props.renderModal({
                        onOpen,
                        onClose
                    })}
                </StyledBox>
            </Inner>
        </StyledContainer>}
        {props.renderTrigger({
            onOpen,
            onClose
        })}
    </Fragment>
}

Modal.propTypes = {
    renderModal: PropTypes.any.isRequired,
    renderTrigger: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
}

Modal.defaultProps = {
    onOpen: noop,
    onClose: noop
}

export default Modal
