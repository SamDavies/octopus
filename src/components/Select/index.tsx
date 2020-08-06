import noop from 'lodash/noop'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'
import Button from '../Button'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'

const UnavailableItem = `
    position: relative;
    pointer-events: none;
    cursor: default;
`

const dropdownVisible = `
    opacity: 1;
    visibility: visible;
`

type StyledControlItemProps = {
    isFetching: boolean;
}

const StyledControlItem = styled.div<StyledControlItemProps>`
  position: relative;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Color.black};
  border: 2px solid ${Color.black};
  height: 36px;
  line-height: 32px;
  border: none;
  box-shadow: none;
  transition: 0.5s;
  outline: none;

  ${(props): string => props.isFetching ? UnavailableItem : ''};
`

type StyledControlDropdownProps = {
    offset: number;
    isVisible: boolean;
}

const StyledControlDropdown = styled.div<StyledControlDropdownProps>`
  padding-left: 9px;
  padding-right: 11px;
  box-shadow: none;
  padding-bottom: 10px;
  font-family: ${Font.serif};
  position: relative;
  padding-top: 10px;
  z-index: 99;
  top: -2px;
  border: 2px solid ${Color.black};
  border-radius: 0;
  transition: none;
  background-color: ${Color.white};
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  max-height: ${(props): string => `calc(100vh - ${props.offset}px)`};
  ${(props): string => props.isVisible ? dropdownVisible : ''};

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 8px;
    right: 8px;
    height: 2px;
    background-color: ${Color.black};
    z-index: 10;
  }

  > .icon-wrapper {
    position: absolute;
  }
`

const StyledEmptyOption = styled.div`
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  height: 32px;
  line-height: 32px;
  color: ${Color.black};
  padding: 1px 16px 0;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  pointer-events: none;

  &:hover {
    background-color: ${Color.salmon};
    color: ${Color.white};
  }
`

const StyledViewAllOption = styled.div`
  text-transform: uppercase;
  position: relative;
  height: 32px;
  line-height: 32px;
  padding: 1px 16px 0;
  font-weight: bold;
  color: ${Color.black};
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  border-bottom: 2px solid ${Color.black};
  font-size: 16px;
  outline: none;
  &:hover {
    background-color: ${Color.salmon};
    color: ${Color.white};
  }
`

type StyledDefaultOptionProps = {
    bordered: boolean;
    selected: boolean;
}

const StyledDefaultOption = styled.div<StyledDefaultOptionProps>`
    text-transform: uppercase;
    position: relative;
    font-size: 13px;
    color: ${Color.black};
    max-width: 100%;
    height: 32px;
    line-height: 32px;
    padding: 1px 16px 0;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    transition: all 0.15s ease-in;
    outline: none;
    white-space: nowrap;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: ${(props): string => props.bordered ? `2px solid ${Color.black}` : 'none'};
    ${(props): string => props.selected ? `
        background-color: ${Color.black};
        color: ${Color.white};
    ` : ''};

    &:hover {
    background-color: ${Color.salmon};
    color: ${Color.white};
    }

    .icon-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 8px;
    height: 100%;
    display: flex;
    align-items: center;
    }

    .icon-container {
    position: relative;
    top: 1px;
    }

    span {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    }
`

const StyledFilter = styled.div`
    min-width: 0;
    position: relative;
    font-family: ${Font.sanSerif};
    letter-spacing: 0.8px;
`

const StyledButton = styled(Button)`
    display: flex;
    padding-right: 10px;
`

type StyledTextProps = {
    $isFilterSelected: boolean;
}

const StyledText = styled.div<StyledTextProps>`
    flex: 1;
    color: ${Color.black};
    max-width: calc(100% - 10px);
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props): string => props.$isFilterSelected ? `
        color: ${Color.white};
    ` : ''};
`

type StyledArrowProps = {
    $isFilterSelected: boolean;
}

const StyledArrow = styled(IoMdArrowDropdown)<StyledArrowProps>`
    font-size: 30px;
    color: ${Color.coral};
    ${(props): string => props.$isFilterSelected ? `
        color: ${Color.white};
    ` : ''};
`

export type Option = {
    id: string;
    value: string;
}

type Props = {
    onClear?: () => void;
    showResetControls?: boolean;
    label: string;
    allowMultiSelect?: boolean;
    isOpened?: boolean;
    options?: Option[];
    selectedValue?: string | string[];
    onSelect: (id: string) => void;
    onDeselect?: (id: string) => void;
    isFetching?: boolean;
    id: string;
}

const Select: React.FC<Props> = (
    {
        onSelect,
        onClear = noop,
        onDeselect = noop,
        showResetControls = true,
        allowMultiSelect = false,
        selectedValue = '',
        isOpened = false,
        isFetching = false,
        options = [],
        label,
        id = ''
    }: Props
) => {
    const [isOpenedState, setIsOpened] = useState(isOpened || false)
    const [selectedFilterName, setSelectedFilterName] = useState('')
    const control = useRef<HTMLInputElement>(null)
    const title = useRef<HTMLButtonElement>(null)
    const showViewAll = showResetControls && selectedValue
    const offset: number = control.current?.offsetTop || 0
    const handleUserClick = (e: MouseEvent): void => {
        if (!isOpenedState && title.current?.contains(e.target as Node)) {
            setIsOpened(true)
        } else if (isOpenedState) {
            setIsOpened(false)
        }
    }

    const handleOnClear = () => {
        return (e: React.MouseEvent<HTMLElement>): void => {
            e.stopPropagation()
            onClear()
        }
    }

    useEffect(() => {
        if (selectedValue && options.length) {
            if (allowMultiSelect) {
                // Join all selected items into 1 string
                const value = options.filter(
                    option =>
                        option &&
                        (
                            selectedValue.includes(String(option.id)) ||
                            (
                                option.value && selectedValue.includes(
                                    option.value.toLowerCase()
                                )
                            )
                        )
                ).map(option => option.value).join(', ')
                setSelectedFilterName(value || '')
            } else {
                // Find the select value
                const value = options.find(
                    option =>
                        option &&
                        (String(option.id) === selectedValue ||
                            (option.value &&
                                option.value.toLowerCase() === selectedValue))
                )
                setSelectedFilterName(value ? value.value : '')
            }
        } else {
            setSelectedFilterName('')
        }
    }, [options, selectedValue])

    useEffect(() => {
        window.addEventListener('click', handleUserClick)
        return (): void => {
            window.removeEventListener('click', handleUserClick)
        }
    })

    return <StyledFilter>
        <StyledControlItem
            ref={control}
            isFetching={isFetching}
            role='option'
            tabIndex={0}
            id={`dropdown__${id}`}
            data-role='dropdown-filter'
        >
            <StyledButton
                kind={selectedFilterName ? 'primary' : 'secondary'}
                fullWidth
                data-testid={`selected-${selectedFilterName}`}
                ref={title}
                data-role='dropdown-value-display'
                data-opened={isOpenedState}
            >
                <StyledText $isFilterSelected={!!selectedFilterName}>
                    {selectedFilterName || label}
                </StyledText>
                <StyledArrow $isFilterSelected={!!selectedFilterName}/>
            </StyledButton>
            <StyledControlDropdown offset={offset + 45} isVisible={isOpenedState}>
                {showViewAll && (
                    <StyledViewAllOption
                        role='option'
                        tabIndex={0}
                        key='reset'
                        onClick={handleOnClear()}
                    >
                        View all
                    </StyledViewAllOption>
                )}
                {options.length ? (
                    options.reduce((acc: React.ReactElement[], option) => {
                        if (option) {
                            const isSelected =
                                allowMultiSelect ? selectedValue.includes(option.id)
                                    : selectedValue === option.id
                            acc.push(
                                <StyledDefaultOption
                                    key={option.id}
                                    data-testid={`option-${option.id}`}
                                    role='option'
                                    tabIndex={0}
                                    bordered={false}
                                    selected={isSelected}
                                    onClick={(): void =>
                                        isSelected ? onDeselect(option.id)
                                            : onSelect(option.id)
                                    }
                                    data-role='dropdown-option'
                                >
                                    <span>{option.value}</span>
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
}

export default Select
