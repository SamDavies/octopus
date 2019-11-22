import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import Icon from '../Icon'
import Input, { StyledInput } from '../Input'
import Select from '../Select'

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    .icon-wrapper {
        position: absolute;
        top: 18px;
    }

    ${StyledInput} {
        padding-left: 23px;
        &:active {
            border-color: ${colors.black};
        }
    }
`

const Search = props => (props.hasDropdown ? (
    <Select
        selectedValue={props.selectedValue}
        options={props.options}
        handleSelectChange={props.onSelectChange}
        customPlaceholder={true}
        renderCustomPlaceholder={(title) => (
            <InputWrapper ref={title} hasOptions={props.options} hasDropdown={props.hasDropdown}>
                <Input
                    placeholder='Search'
                    data-testid={props.name}
                    name={props.name}
                    id={props.name}
                    value={props.value}
                    disabled={props.disabled}
                    onChange={props.onInputChange}
                    hideLabel={false}
                    onKeyPress={props.onKeyPress}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                />
                <Icon icon="search" width={15} height={15} />
            </InputWrapper>

        )}
    />
) : (
    <InputWrapper>
        <Input
            placeholder='Search'
            data-testid={props.name}
            name={props.name}
            id={props.name}
            value={props.value}
            disabled={props.disabled}
            onChange={props.onInputChange}
            hideLabel={false}
            onKeyPress={props.onKeyPress}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
        <Icon icon="search" width={15} height={15} />
    </InputWrapper>
)
)

Search.propTypes = {
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
    selectedValue: '',
    hasDropdown: true,
    onKeyPress: () => {},
    onSelectChange: () => {},
    onInputChange: () => {}
}

export default Search
