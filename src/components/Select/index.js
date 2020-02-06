import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import { StyledControlDropdown, StyledControlItem, StyledControlPlaceholder, StyledDefaultOption, StyledEmptyOption, StyledFilter, StyledViewAllOption } from './styles'

const Select = props => {
    const [isOpened, setIsOpened] = useState(props.isOpened || false)
    const [selectedFilterName, setSelectedFilterName] = useState('')
    const control = useRef()
    const title = useRef()
    const showViewAll = props.showResetControls && props.selectedValue
    const offset = control.current ? control.current.offsetTop : 0
    const handleUserClick = e => {
        if (!isOpened && title.current.contains(e.target)) {
            setIsOpened(true)
        } else if (isOpened) {
            setIsOpened(false)
        }
    }

    const handleResetItem = e => {
        e.stopPropagation()
        props.resetSelectedValue(props.filterId)
    }

    useEffect(() => {
        if (props.selectedValue && props.options.length) {
            const name = props.options.find(
                option =>
                    option &&
                    (String(option.id) === props.selectedValue ||
                        (option.name &&
                            option.name.toLowerCase() === props.selectedValue) ||
                        (option && option.ids === props.selectedValue))
            )

            setSelectedFilterName(name ? name.name : '')
        } else {
            setSelectedFilterName('')
        }
    }, [props.options, props.selectedValue])

    useEffect(() => {
        window.addEventListener('click', handleUserClick)
        return () => {
            window.removeEventListener('click', handleUserClick)
        }
    })

    return (
        <StyledFilter>
            <StyledControlItem
                ref={control}
                isFetching={props.isFetching}
                role='option'
                tabIndex={0}
                id={`dropdown__${props.id}`}
                data-role='dropdown-filter'
            >
                {props.customPlaceholder ? (
                    props.renderCustomPlaceholder(title, isOpened)
                ) : (
                    <StyledControlPlaceholder
                        data-testid={`selected-${selectedFilterName}`}
                        ref={title}
                        isOpened={isOpened}
                        data-role='dropdown-value-display'
                        selectType={props.selectType}
                        data-opened={isOpened}
                        isFilterSelected={selectedFilterName}
                    >
                        {selectedFilterName || props.label}
                        <Icon icon='dropdown-arrow' width={22} height={22} />
                    </StyledControlPlaceholder>
                )}
                <StyledControlDropdown offset={offset + 45} isVisible={isOpened}>
                    {showViewAll && (
                        <StyledViewAllOption
                            role='option'
                            tabIndex={0}
                            key='reset'
                            value='@@resetFilter'
                            onClick={handleResetItem}
                        >
                            View all
                        </StyledViewAllOption>
                    )}
                    {props.options.length ? (
                        props.options.reduce((acc, option) => {
                            if (option) {
                                const { name, id: optionId, ids } = option
                                const value = ids || String(optionId)
                                acc.push(
                                    <StyledDefaultOption
                                        key={value}
                                        data-testid={`option-${value}`}
                                        role='option'
                                        tabIndex={0}
                                        bordered={false}
                                        selected={value === props.selectedValue}
                                        onClick={() =>
                                            props.handleSelectChange(props.filterId, value, option)
                                        }
                                        data-role='dropdown-option'
                                    >
                                        {name}
                                        {props.showResetControls && value === props.selectedValue && (
                                            <div
                                                onClick={handleResetItem}
                                                data-testid={`cancel-${value}`}
                                            >
                                                <Icon
                                                    width={10}
                                                    height={10}
                                                    fillColor='white'
                                                    icon='close'
                                                />
                                            </div>
                                        )}
                                    </StyledDefaultOption>
                                )
                            }
                            return acc
                        }, [])
                    ) : (
                        <StyledEmptyOption>None</StyledEmptyOption>
                    )}
                </StyledControlDropdown>
            </StyledControlItem>
        </StyledFilter>
    )
}

Select.propTypes = {
    resetSelectedValue: PropTypes.func,
    /** Whether to render close icon and select all button */
    showResetControls: PropTypes.bool,
    label: PropTypes.string,
    customPlaceholder: PropTypes.bool,
    renderCustomPlaceholder: PropTypes.func,
    isOpened: PropTypes.bool,
    /** Options to be passed to dropdown */
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        ids: PropTypes.any,
        onClick: PropTypes.func,
        name: PropTypes.string.isRequired
    })).isRequired,
    selectedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    handleSelectChange: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    filterId: PropTypes.string,
    id: PropTypes.string,
    /** Style of select component */
    selectType: PropTypes.oneOf(['primary', 'secondary', 'inline'])
}

Select.defaultProps = {
    showResetControls: true,
    customPlaceholder: false,
    selectedValue: '',
    isOpened: false,
    isFetching: false,
    id: '',
    selectType: 'primary'
}

export default Select

export { StyledControlDropdown, StyledControlItem, StyledControlPlaceholder, StyledFilter }
