import { Button, device, Heading, Modal } from '@stylindex/octopus'
import React from 'react'
import styled from 'styled-components'

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        margin-right: 20px;
        width: 50%;
    }
    
    & > *:not(:last-child) {
        margin-bottom: 40px;
    }
`

const OtherExample = () => {

    return <StyledSpacing>
        <Modal
            renderTrigger={({ onOpen }) =>
                <Button
                    onClick={onOpen}
                >
                    Open Modal
                </Button>
            }
            renderModal={({ onClose }) =>
                <div>
                    <Heading>
                        Hello
                    </Heading>
                    <Heading level={3}>
                        This is a modal component
                    </Heading>
                    <Button
                        onClick={onClose}
                    >
                        Close Modal
                    </Button>
                </div>
            }
        />
    </StyledSpacing>
}

export default OtherExample
