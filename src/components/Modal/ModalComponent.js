import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled, { css, keyframes } from 'styled-components'
import { colors, device, headerHeight, headerMobileHeight } from '../../'
import Button from '../Button'
import Heading, { StyledHeading } from '../Heading'
import Icon from '../Icon'
import Logo from '../Logo'

const modalContentStyles = {
    default: css`
        @media ${device.tablet} {
            width: 90%;
            max-width: 700px;
        }
    `,
    contact: css`
        padding: 3rem;
        @media ${device.tablet} {
            width: 90%;
            max-width: 700px;
        }
    `,
    minimal: css`
        padding: 30px;
        @media ${device.tablet} {
            padding: 50px;
        }
    `,
    invisible: css`
        max-height: 100vh;
    `,
    withLogo: css`
        padding: 60px 30px;
        @media ${device.tablet} {
            padding: 65px 25px
        }`
}

const modalAnimation = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.0;       
  }
  90% {
    opacity: 1; 
  }
  100% {
    transform: scale(1);
    opacity: 1; 
  } 
`

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100000;
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255, 0.8);
    backdrop-filter: blur(8px);
    animation: ${modalAnimation} 0.2s ease-out;
    overflow: scroll;
    width: 100vw;
`

const ModalContent = styled.div`
    display: flex;
    background: white;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    position: relative;
    height: ${({ isAutoHeight }) => (isAutoHeight ? 'auto' : '100%')};

    @media ${device.tablet} {
        margin: auto;
        border-width: ${({ borderWidth }) => `${borderWidth}px`};
        border: solid ${colors.black};
        width: 100%;
        max-width: ${({ width }) => width || '600px'};
        min-height: inherit;

    }

    ${StyledHeading} {
        text-align: center;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.5px;
        text-indent: none;
    }

    ${({ modalType }) => modalType && modalContentStyles[modalType]}
    
`
const ModalChildren = styled.div`
    &:not(:first-child) {
        margin-top: 16px;
    }
    &:not(:last-child) {
        margin-bottom: 26px;
    }
`

const ModalActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        display: block;
        & + button {
            margin-top: 13px;
        }
    }
`

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  background: transparent;
  border: 0;
  height: 56px;
  width: 56px;
  top: 0;
  right: 0;
  left: auto;
  text-decoration: none;
  outline: 0;
  padding: 0;

  &:hover {
    .fill-color {
        fill: ${colors.cloud};
    }
  }
`

export const StyledModalHead = styled.div`
  display: none;
  @media ${device.tablet} {
    min-height: ${headerMobileHeight}px;
    width: 100%;
    background-color: ${colors.black};
    color: ${colors.white};
    display: flex;
    align-items: center;
    position: relative;
    padding: 30px 16px;
    margin-bottom: 30px;
  }
  @media ${device.desktop} {
    min-height: ${headerHeight}px;
  }
`

export const StyledLogoContainer = styled.div`
  max-width: 235px;
  margin: 0 auto;
`

export const StyledModalContent = styled.div`
    width: 100%;
`

const ModalComponent = props => {
    const modalContainer = document.createElement('div')
    const appContainer = document.getElementById(props.appId)
    const hasActions = props.primaryButton || props.secondaryButton
    modalContainer.setAttribute('id', 'modalContainer')

    useEffect(() => {
        const modalRoot = document.createElement('div')
        modalRoot.setAttribute('id', 'modalRoot')
        modalRoot.appendChild(modalContainer)
        document.body.appendChild(modalRoot)
        if (appContainer) {
            appContainer.style = 'overflow:hidden;'
        }
        return () => {
            if (appContainer) {
                appContainer.removeAttribute('style')
            }
            document.body.removeChild(modalRoot)
        }
    })

    return createPortal(
        <ModalWrapper id='modalWrapper'>
            {props.modalType === 'withLogo' && (
                <StyledModalHead>
                    <StyledLogoContainer>
                        <Logo color='white' link={false} />
                    </StyledLogoContainer>
                </StyledModalHead>
            )}
            <ModalContent {...props}>
                {props.onClose && (
                    <CloseButton onClick={props.onClose} type='button'>
                        <Icon icon='close' width={16} height={16} fillColor='black' />
                    </CloseButton>
                )
                }
                <StyledModalContent>
                    {props.title && <Heading level={5} uppercase>{props.title}</Heading>}
                    <ModalChildren>
                        {props.children}
                    </ModalChildren>
                    {hasActions && (
                        <ModalActions>
                            {props.primaryButton && (
                                <Button
                                    type='primary'
                                    disabled={props.primaryButton.disabled || false}
                                    onClick={props.primaryButton.onClick}>
                                    {props.primaryButton.children}
                                </Button>
                            )}
                            {props.secondaryButton && (
                                <Button
                                    type='ghost'
                                    onClick={props.secondaryButton.onClick}
                                    disabled={props.secondaryButton.disabled || false}
                                >
                                    {props.secondaryButton.children}
                                </Button>
                            )}
                        </ModalActions>
                    )}
                </StyledModalContent>
            </ModalContent>
        </ModalWrapper>,
        modalContainer
    )
}

ModalComponent.propTypes = {
    /** Is modal visible */
    visible: PropTypes.bool,
    /** Needed to apply styles below modal */
    appId: PropTypes.string,
    /** Modal type. Mostly varies in width and padding, but `withLogo` also renders a logo at the top of the page */
    modalType: PropTypes.oneOf([
        'default',
        'withLogo',
        'invisible',
        'minimal',
        'contact'
    ]),
    borderWidth: PropTypes.number,
    /** Modal title */
    title: PropTypes.string,
    onClose: PropTypes.func,
    /** Primary action button for the modal. If you need a footer, add a button on your own */
    primaryButton: PropTypes.shape({
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
            PropTypes.element
        ]),
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }),
    /** Secondary action button for the modal. If you need a footer, add a button on your own */
    secondaryButton: PropTypes.shape({
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
            PropTypes.element
        ]),
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element,
        PropTypes.array
    ]),
    /** Is modal height `auto` */
    isAutoHeight: PropTypes.bool,
    height: PropTypes.string,
    width: PropTypes.string
}

ModalComponent.defaultProps = {
    borderWidth: 2,
    appId: 'root',
    modalType: 'default',
    title: '',
    isAutoHeight: true
}

export default ModalComponent
