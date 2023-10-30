
import PropTypes from 'prop-types';
import React, { useState } from 'react'

const Tabs = ({ tabs, onSelectActiveTab }) => {
    const [currentTab, setCurrentTab] = useState('All');
    const activeTabClasses = {
        active:
            'cursor-pointer select-none bg-gray-600 text-gray-50 px-3 py-1 sm:py-2 rounded-md text-sm font-medium shadow-sm',
        inactive:
            'cursor-pointer select-none bg-gray-50 text-gray-700 px-3 py-1 sm:py-2 rounded-md text-sm font-medium shadow-sm sm:shadow-md',
    }

    const handleClick = (active_tab) => {
        setCurrentTab(active_tab)
        onSelectActiveTab(active_tab)
    }

    return (
        <div>
            <div className="flex items-baseline justify-center flex-wrap  space-x-1 sm:space-x-2 lg:space-x-3 space-y-1 px-4 sm:px-8 sm:space-y-2">
                { tabs.map((eachTab, index) => (
                    <span
                        key={ index }
                        onClick={ () => handleClick(eachTab.title) }
                        className={
                            currentTab === eachTab.title
                                ? activeTabClasses.active
                                : activeTabClasses.inactive
                        }
                    >
                        { eachTab.title }
                    </span>
                )) }
            </div>
        </div>
    )
}

Tabs.propTypes = {
    tabs: PropTypes.array,
    onSelectActiveTab: PropTypes.func
};

export default Tabs