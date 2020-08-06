import noop from 'lodash/noop'
import React, { Fragment, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import styled, { createGlobalStyle } from 'styled-components'
import Box from '../Box'
import Button from '../Button'
import { MediaQuery } from '../../constants/sizes'

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
    overflow: scroll;
`

type InnerProps = {
    fullWidth?: boolean;
}

const Inner = styled.div<InnerProps>`
    width: 600px;
    z-index: 2000;
    max-height: 100%;
    padding: 10px;

    @media ${MediaQuery.desktop} {
        padding: 20px;
    }

    ${(props): string => props.fullWidth ? `
        width: 100%;
        height: 100%;

        @media ${MediaQuery.desktop} {
            padding: 40px;
        }
    ` : ''}
`

const StyledBox = styled(Box)`
    height: 100%;
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

type CallbackProps = {
    onOpen: () => void;
    onClose: () => void;
}

type Props = {
    key?: string
    renderModal: (props: CallbackProps) => JSX.Element;
    renderTrigger: (props: CallbackProps) => JSX.Element;
    fullWidth: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const Modal: React.FC<Props> = (
    {
        key,
        renderModal,
        renderTrigger,
        fullWidth = false,
        onOpen = noop,
        onClose = noop
    }: Props
) => {
    const [show, setShow] = useState<boolean>(false)

    const handleOnClose = (): void => {
        setShow(false)
        onClose()
    }

    const handleOnOpen = (): void => {
        setShow(true)
        onOpen()
    }
    return <Fragment key={key}>
        {show && <StyledContainer role='modal'>
            <GlobalBodyHidden/>
            <Inner fullWidth={fullWidth}>
                <StyledBox>
                    <StyledCrossContainer>
                        <StyledCrossButton
                            kind='ghost'
                            size='medium'
                            onClick={handleOnClose}
                        >
                            <IoIosClose
                                fontSize={50}
                            />
                        </StyledCrossButton>
                    </StyledCrossContainer>
                    {renderModal({
                        onOpen: handleOnOpen,
                        onClose: handleOnClose
                    })}
                </StyledBox>
            </Inner>
        </StyledContainer>}
        {renderTrigger({
            onOpen: handleOnOpen,
            onClose: handleOnClose
        })}
    </Fragment>
}

export default Modal
