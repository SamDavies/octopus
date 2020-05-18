import { HorizontalScroll, Tab } from '@stylindex/octopus'
import React, { useState } from 'react'

const TabExample = () => {
    const [selected, setSelected] = useState('tab-1')
    return <HorizontalScroll>
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
}

export default TabExample
