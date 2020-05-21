import { UserAvatar } from '@stylindex/octopus'
import React from 'react'
import styled from 'styled-components'

const StyledSpacing = styled.div`
    display: flex;
    
    & > *:not(:last-child) {
        margin-right: 20px;
    }
`

const OtherExample = () => {
    return <StyledSpacing>
        <UserAvatar
            text="Test Person"
            size="normal"
        />
        <UserAvatar
            text="Test Person"
            size="normal"
            src='https://picsum.photos/200'
        />
    </StyledSpacing>
}

export default OtherExample
