import React from 'react'
import PropTypes from 'prop-types'
import { TabsList, TabsListContent, Tab } from './StyledTabs'

const Tabs = ({ tabs, activeTabId, onTabClick }) => {
    let currentTabId = activeTabId

    if (!currentTabId && tabs[0]) {
        currentTabId = tabs[0].id
    }

    return (
        <TabsList>
            <TabsListContent>
                {tabs.map(({ id, label }, index) => (
                    <Tab
                        tabIndex={0}
                        role='button'
                        key={id}
                        index={tabs.length - index}
                        isActive={currentTabId === id}
                        onClick={() => {
                            onTabClick(id)
                        }}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsListContent>
        </TabsList>
    )
}

Tabs.propTypes = {
    /** active tab id */
    activeTabId: PropTypes.string,
    /** array of the tabs data */
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            value: PropTypes.string
        })
    ),
    /** on tab click callback */
    onTabClick: PropTypes.func
}

Tabs.defaultProps = {
    activeTabId: '',
    tabs: [],
    onTabClick: () => {}
}

export default Tabs
