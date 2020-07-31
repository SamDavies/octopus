import noop from 'lodash/noop'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'
import Button from '../Button'
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

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
    isFetching: boolean
}

const StyledControlItem = styled.div<StyledControlItemProps>`
  position: relative;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.black};
  border: 2px solid ${Colors.black};
  height: 36px;
  line-height: 32px;
  border: none;
  box-shadow: none;
  transition: 0.5s;
  outline: none;

  ${props => props.isFetching && UnavailableItem};
`

type StyledControlDropdownProps = {
    offset: number
    isVisible: boolean
}

const StyledControlDropdown = styled.div<StyledControlDropdownProps>`
  padding-left: 9px;
  padding-right: 11px;
  box-shadow: none;
  padding-bottom: 10px;
  font-family: ${Fonts.serif};
  position: relative;
  padding-top: 10px;
  z-index: 99;
  top: -2px;
  border: 2px solid ${Colors.black};
  border-radius: 0;
  transition: none;
  background-color: ${Colors.white};
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  max-height: ${props => `calc(100vh - ${props.offset}px)`};
  ${props => props.isVisible && dropdownVisible};

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 8px;
    right: 8px;
    height: 2px;
    background-color: ${Colors.black};
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
  color: ${Colors.black};
  padding: 1px 16px 0;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  pointer-events: none;

  &:hover {
    background-color: ${Colors.salmon};
    color: ${Colors.white};
  }
`

const StyledViewAllOption = styled.div`
  text-transform: uppercase;
  position: relative;
  height: 32px;
  line-height: 32px;
  padding: 1px 16px 0;
  font-weight: bold;
  color: ${Colors.black};
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  border-bottom: 2px solid ${Colors.black};
  font-size: 16px;
  outline: none;
  &:hover {
    background-color: ${Colors.salmon};
    color: ${Colors.white};
  }
`

type StyledDefaultOptionProps = {
    bordered: boolean
    selected: boolean
}

const StyledDefaultOption = styled.div<StyledDefaultOptionProps>`
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  color: ${Colors.black};
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
  border-bottom: ${props => props.bordered ? `2px solid ${Colors.black}` : 'none'};
  ${props => props.selected && `
    background-color: ${Colors.black};
    color: ${Colors.white};
`};

  &:hover {
    background-color: ${Colors.salmon};
    color: ${Colors.white};
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
    font-family: ${Fonts.sanSerif};
    letter-spacing: 0.8px;
`

const StyledButton = styled(Button)`
    display: flex;
    padding-right: 10px;
`

type StyledTextProps = {
    $isFilterSelected: boolean
}

const StyledText = styled.div<StyledTextProps>`
    flex: 1;
    color: ${Colors.black};
    max-width: calc(100% - 10px);
    overflow: hidden;
    text-overflow: ellipsis;
    ${props => props.$isFilterSelected && `
        color: ${Colors.white};
    `};
`

type StyledArrowProps = {
    $isFilterSelected: boolean
}

const StyledArrow = styled(IoMdArrowDropdown)<StyledArrowProps>`
    font-size: 30px;
    color: ${Colors.coral};
    ${props => props.$isFilterSelected && `
        color: ${Colors.white};
    `};
`

type Option = {
    id: string
    value: string
}

type Props = {
    onClear: (id: string) => void
    showResetControls: boolean
    label: string
    allowMultiSelect: boolean
    isOpened: boolean
    options: Option[],
    selectedValue: string | string[]
    onSelect: (id: string) => void
    onDeselect: (id: string) => void,
    isFetching: boolean,
    filterId: string,
    id: string
}

const Select: React.FC<Props> = (props: Props) => {
    const [isOpened, setIsOpened] = useState(props.isOpened || false)
    const [selectedFilterName, setSelectedFilterName] = useState('')
    const control = useRef<HTMLInputElement>(null)
    const title = useRef<HTMLButtonElement>(null)
    const showViewAll = props.showResetControls && props.selectedValue
    const offset: number = control.current?.offsetTop || 0
    const handleUserClick = (e: MouseEvent) => {
        if (!isOpened && title.current?.contains(e.target as Node)) {
            setIsOpened(true)
        } else if (isOpened) {
            setIsOpened(false)
        }
    }

    const onClear = (id: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            props.onClear(id)
        }
    }

    useEffect(() => {
        if (props.selectedValue && props.options.length) {
            if (props.allowMultiSelect) {
                // Join all selected items into 1 string
                const value = props.options.filter(
                    option =>
                        option &&
                        (
                            props.selectedValue.includes(String(option.id)) ||
                            (
                                option.value && props.selectedValue.includes(
                                    option.value.toLowerCase()
                                )
                            )
                        )
                ).map(option => option.value).join(', ')
                setSelectedFilterName(value || '')
            } else {
                // Find the select value
                const value = props.options.find(
                    option =>
                        option &&
                        (String(option.id) === props.selectedValue ||
                            (option.value &&
                                option.value.toLowerCase() === props.selectedValue))
                )
                setSelectedFilterName(value ? value.value : '')
            }
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

    return <StyledFilter>
        <StyledControlItem
            ref={control}
            isFetching={props.isFetching}
            role='option'
            tabIndex={0}
            id={`dropdown__${props.id}`}
            data-role='dropdown-filter'
        >
            <StyledButton
                kind={selectedFilterName ? 'primary' : 'secondary'}
                fullWidth
                data-testid={`selected-${selectedFilterName}`}
                ref={title}
                data-role='dropdown-value-display'
                data-opened={isOpened}
            >
                <StyledText $isFilterSelected={!!selectedFilterName}>
                    {selectedFilterName || props.label}
                </StyledText>
                <StyledArrow $isFilterSelected={!!selectedFilterName} />
            </StyledButton>
            <StyledControlDropdown offset={offset + 45} isVisible={isOpened}>
                {showViewAll && (
                    <StyledViewAllOption
                        role='option'
                        tabIndex={0}
                        key='reset'
                        onClick={onClear(props.filterId)}
                    >
                        View all
                    </StyledViewAllOption>
                )}
                {props.options.length ? (
                    props.options.reduce((acc: React.ReactElement[], option) => {
                        if (option) {
                            const isSelected =
                                props.allowMultiSelect ? props.selectedValue.includes(option.id)
                                    : props.selectedValue === option.id
                            acc.push(
                                <StyledDefaultOption
                                    key={option.id}
                                    data-testid={`option-${option.id}`}
                                    role='option'
                                    tabIndex={0}
                                    bordered={false}
                                    selected={isSelected}
                                    onClick={() =>
                                        isSelected ? props.onDeselect(option.id)
                                            : props.onSelect(option.id)
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

Select.defaultProps = {
    onDeselect: noop,
    showResetControls: true,
    allowMultiSelect: false,
    selectedValue: '',
    isOpened: false,
    isFetching: false,
    id: ''
}

export default Select
