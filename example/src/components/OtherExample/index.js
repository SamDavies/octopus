import { Color, Notification, Text, Tooltip, UserAvatar } from '@stylindex/octopus'
import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
    display: flex;

    & > *:not(:last-child) {
        margin-right: 20px;
    }
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin-bottom: 20px;
    }
`

const StyledTooltip = styled.div`
    max-width: 200px;
`

const OtherExample = () => {
    return <StyledColumn>
        <StyledRow>
            <UserAvatar
                text="Test Person"
                size="normal"
            />
            <UserAvatar
                text="Test Person"
                size="normal"
                src='https://picsum.photos/200'
            />
        </StyledRow>
        <StyledTooltip>
            <Tooltip
                renderTrigger={() => <div>some normal text with a tooltip</div>}
                renderContent={() => <Text colour={Color.white}>and some normal text in the tooltip</Text>}
                position='top'
            />
        </StyledTooltip>

        <Notification type="success" text="Success message"/>
        <Notification type="warning" text="warning message"/>
        <Notification type="error" text="error message"/>
    </StyledColumn>
}

export default OtherExample
