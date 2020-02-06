import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Input, { StyledInput } from '../Input'
import Select from '../Select'
import { StyledFilter } from '../Select/styles'

const StyledWrapper = styled.div`
    width: 100%;
    position: relative;
    
    ${StyledInput} {
        padding-right: 110px;
    }

    ${StyledFilter} {
        position: absolute;
        width: 40%;
        max-width: 100px;
        top: 14px;
        right: 0%;
    }
`

const InputWithDropdown = props => (
    <StyledWrapper className='dropdown-wrapper'>
        <Input
            placeholder={props.placeholder}
            data-testid={props.name}
            name={props.name}
            label={props.inputLabel}
            id={props.name}
            value={props.value}
            disabled={props.disabled}
            onChange={props.onInputChange}
            hideLabel={false}
            onKeyPress={props.onKeyPress}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
        <Select
            label={props.selectLabel}
            resetSelectedValue={() => { }}
            showResetControls={false}
            selectedValue={props.selectedValue}
            options={props.options}
            handleSelectChange={props.onSelectChange}
            selectType='inline'
        />
    </StyledWrapper>
)

InputWithDropdown.propTypes = {
    selectLabel: PropTypes.string,
    inputLabel: PropTypes.string,
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
    onBlur: PropTypes.func
}

InputWithDropdown.defaultProps = {
    label: '',
    placeholder: '',
    options: [],
    selectedValue: '',
    hasDropdown: true,
    onKeyPress: () => { },
    onSelectChange: () => { },
    onInputChange: () => { },
    onBlur: () => { },
    onFocus: () => { }
}

export default InputWithDropdown
