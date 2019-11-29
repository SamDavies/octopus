import PropTypes from 'prop-types'
import React from 'react'
import Select from '../Select'
import SearchInput from './SearchInput'

const Search = props => {
    if (props.hasDropdown) {
        return (
            <Select
                resetSelectedValue={() => {}}
                showResetControls={false}
                selectedValue={props.selectedValue}
                options={props.options}
                handleSelectChange={props.onSelectChange}
                customPlaceholder={true}
                renderCustomPlaceholder={(title, isOpened) => (
                    <SearchInput
                        inputRef={title}
                        hasOptions={!!props.options.length}
                        isOpened={isOpened}
                        placeholder={props.placeholder}
                        name={props.name}
                        value={props.value}
                        disabled={props.disabled}
                        onChange={props.onInputChange}
                        onKeyPress={props.onKeyPress}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                    />
                )}
            />
        )
    }

    return (
        <SearchInput
            hasDropdown={false}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onChange={props.onInputChange}
            onKeyPress={props.onKeyPress}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    )
}

Search.propTypes = {
    placeholder: PropTypes.string,
    selectedValue: PropTypes.string,
    onSelectChange: PropTypes.func,
    options: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
    disabled: PropTypes.func,
    onKeyPress: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    hasDropdown: PropTypes.bool
}

Search.defaultProps = {
    placeholder: 'Search',
    options: [],
    selectedValue: '',
    hasDropdown: true,
    onKeyPress: () => { },
    onSelectChange: () => { },
    onInputChange: () => { },
    onBlur: () => { },
    onFocus: () => { }
}

export default Search
