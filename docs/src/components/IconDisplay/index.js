import { colors, device, Icon, icons } from '@stylindex/octopus'
import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .icon-block {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid ${colors.cloud};
        .icon-label {
            margin-bottom: 10px;
        }
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
const IconDisplay = () => (
    <StyledWrapper>
        {icons.map(key => (
            <div key={key} className="icon-block">
                <div className="icon-label">{key}</div>
                <Icon icon={key} strokeColor='none'/>
            </div>
        ))}
    </StyledWrapper>
)

export default IconDisplay
