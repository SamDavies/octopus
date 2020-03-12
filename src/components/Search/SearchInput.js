import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import Icon from '../Icon'
import Input from '../Input'

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    line-height: 32px;
    .icon-wrapper {
        position: absolute;
        top: 18px;
    }

    ${Input} {
        padding-left: 23px;
        ${({ hasDropdown }) => hasDropdown && `
            &:active {
                border-color: ${colors.black};
            }
        `}

        ${({ isOpened }) => isOpened && `
            border-bottom-width: 0px;
        `}
    }

    ${({ status }) => status === 'focus' && `
        .fill-color {
            fill: ${colors.lightSalmon};
        }
    `}

    ${({ status }) => status === 'focus' && `
        .fill-color {
            fill: ${colors.lightSalmon};
        }
    `}

    ${({ status }) => status === 'active' && `
        .fill-color {
            fill: ${colors.coral};
        }
    `}
`

const SearchInput = props => {
    const [status, setStatus] = useState('')
    return <InputWrapper
        ref={props.inputRef}
        hasOptions={!!props.hasOptions}
        hasDropdown={props.hasDropdown}
        isOpened={props.isOpened}
        status={status}
    >
        <Input
            placeholder={props.placeholder}
            data-testid={props.name}
            name={props.name}
            id={props.name}
            value={props.value}
            disabled={props.disabled}
            onChange={props.onChange}
            onKeyPress={(e) => {
                setStatus('active')
                props.onKeyPress(e)
            }}
            onFocus={(e) => {
                setStatus('focus')
                props.onFocus(e)
            }}
            onBlur={(e) => {
                setStatus('')
                props.onBlur(e)
            }}
        />
        <Icon icon='search' width={15} height={15} />
    </InputWrapper>
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.object,
    hasOptions: PropTypes.bool,
    name: PropTypes.string,
    isOpened: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.func,
    onKeyPress: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    hasDropdown: PropTypes.bool
}

SearchInput.defaultProps = {
    placeholder: 'Search',
    name: 'search',
    isOpened: false,
    hasOptions: false,
    hasDropdown: true,
    onKeyPress: () => { },
    onChange: () => { },
    onFocus: () => { }
}

export default SearchInput
