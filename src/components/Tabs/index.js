import PropsTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { device, HorizontalScroll } from '../..'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 50px;
`

const StyledTabs = styled(HorizontalScroll)`
    padding-left: 20px;
    
    @media ${device.tablet} {
        padding-left: 100px;
        padding-right: 100px;
    }
`

const Tabs = props =>
    <StyledContainer>
        <StyledTabs>
            {props.children}
        </StyledTabs>
    </StyledContainer>

Tabs.propTypes = {
    children: PropsTypes.any.isRequired
}

export default Tabs
