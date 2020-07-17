import { HorizontalScroll, Tab } from '@stylindex/octopus'
import React, { useState, Fragment } from 'react'
import styled from 'styled-components'

const StyledColumn = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 150px;
`

const NavigationExample = () => {
    const [selected, setSelected] = useState('tab-1')
    return <Fragment>
        <HorizontalScroll>
            <Tab
                isSelected={selected === 'tab-1'}
                onClick={() => setSelected('tab-1')}
            >
                Tab 1
            </Tab>
            <Tab
                isSelected={selected === 'tab-2'}
                onClick={() => setSelected('tab-2')}
            >
                Tab 2
            </Tab>
            <Tab
                isSelected={selected === 'tab-3'}
                onClick={() => setSelected('tab-3')}
            >
                Tab 3
            </Tab>
            <Tab
                isSelected={selected === 'tab-4'}
                onClick={() => setSelected('tab-4')}
            >
                Tab 4
            </Tab>
            <Tab
                isSelected={selected === 'tab-5'}
                onClick={() => setSelected('tab-5')}
            >
                Tab 5
            </Tab>
            <Tab
                isSelected={selected === 'tab-6'}
                onClick={() => setSelected('tab-6')}
            >
                Tab 6
            </Tab>
            <Tab
                isSelected={selected === 'tab-7'}
                onClick={() => setSelected('tab-7')}
            >
                Tab 7
            </Tab>
            <Tab
                isSelected={selected === 'tab-8'}
                onClick={() => setSelected('tab-8')}
            >
                Tab 8
            </Tab>
        </HorizontalScroll>
        <StyledColumn>
            <Tab
                direction={'VERTICAL'}
                isSelected={selected === 'tab-1'}
                onClick={() => setSelected('tab-1')}
            >
                Vertical Tab 1
            </Tab>
            <Tab
                direction={'VERTICAL'}
                isSelected={selected === 'tab-2'}
                onClick={() => setSelected('tab-2')}
            >
                Vertical Tab 2
            </Tab>
            <Tab
                direction={'VERTICAL'}
                isSelected={selected === 'tab-3'}
                onClick={() => setSelected('tab-3')}
            >
                Vertical Tab 3
            </Tab>
            <Tab
                direction={'VERTICAL'}
                isSelected={selected === 'tab-4'}
                onClick={() => setSelected('tab-4')}
            >
                Vertical Tab 4
            </Tab>
        </StyledColumn>
    </Fragment>
}

export default NavigationExample
