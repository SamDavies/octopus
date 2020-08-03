import { Button, MediaQuery, Heading, Modal } from '@stylindex/octopus'
import React from 'react'
import styled from 'styled-components'

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${MediaQuery.tablet} {
        margin-right: 20px;
        width: 50%;
    }

    & > *:not(:last-child) {
        margin-bottom: 40px;
    }
`

const ExampleModalInner = props =>
    <div>
        <Heading>
            Hello
        </Heading>
        <Heading level={3}>
            This is a modal component
        </Heading>
        <Button
            onClick={props.onClose}
        >
            Close Modal
        </Button>
    </div>

const ModalExample = () =>
    <StyledSpacing>
        <Modal
            renderTrigger={({ onOpen }) =>
                <Button onClick={onOpen}>
                    Normal Modal
                </Button>
            }
            renderModal={({ onClose }) =>
                <ExampleModalInner
                    onClose={onClose}
                />
            }
        />
        <Modal
            renderTrigger={({ onOpen }) =>
                <Button onClick={onOpen}>
                    Overflow Example
                </Button>
            }
            renderModal={() =>
                <div>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                    <Heading> Hello </Heading>
                </div>
            }
        />
        <Modal
            fullWidth
            renderTrigger={({ onOpen }) =>
                <Button onClick={onOpen}>
                    Full Width Modal
                </Button>
            }
            renderModal={({ onClose }) =>
                <ExampleModalInner
                    onClose={onClose}
                />
            }
        />
    </StyledSpacing>

export default ModalExample
