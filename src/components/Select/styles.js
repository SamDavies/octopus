import styled, { css } from 'styled-components'
import { colors, fonts } from '../../'

const UnavailableItem = `
    position: relative;
    pointer-events: none;
    cursor: default;
`

const dropdownVisible = `
    opacity: 1;
    visibility: visible;
`

export const StyledFilter = styled.div`
    min-width: 0;
    position: relative;
    font-family: ${fonts.cera};
    letter-spacing: 0.8px;
`

export const StyledControlItem = styled.div`
  position: relative;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.black};
  border: 2px solid ${colors.black};
  height: 36px;
  line-height: 32px;
  border: none;
  box-shadow: none;
  transition: 0.5s;
  outline: none;

  ${({ isFetching }) => isFetching && UnavailableItem};
`
const isOpened = css`
  ${props => props.isOpened && `
     background: ${colors.white};
      color: ${colors.coral} !important;
      .fill-color {
        fill: ${colors.coral} !important;
      }
  `}
`

export const StyledControlPlaceholder = styled.div`
  color: ${colors.black};
  border: 2px solid ${colors.black};
  cursor: pointer;
  position: relative;
  text-align: center;
  transition: 150ms ease-in background-color, color 150ms  ease-in;
  border-bottom-color: ${({ isOpened }) => (isOpened ? 'transparent' : colors.black)};

  .icon-wrapper {
    position: absolute;
    right: 9px;
    top: 0px;
    display: flex;
    align-items: center;
    height: 100%;

    .fill-color {
      fill: ${colors.salmon}
    }
  }

  &:hover {
    color: ${colors.lightSalmon};
    .fill-color {
      fill: ${colors.lightSalmon};
    }
  }

  ${({ isOpened }) => isOpened && `
    color: ${colors.coral} !important;
    .fill-color {
      fill: ${colors.coral} !important;
    }
  `};

  ${(props) => props.isFilterSelected && `
    color: ${colors.white};
    background-color: ${colors.black};
    .icon-wrapper {
        .fill-color {
          fill: ${colors.white}
        }
      }

    .fill-color {
      fill: ${colors.white};
    }

    &:hover { 
      background: ${colors.white};
      color: ${colors.lightSalmon};
      .fill-color {
        fill: ${colors.lightSalmon};
      }
    }

    ${isOpened}
  `}
  
    
    ${({ selectType }) => selectType === 'secondary' && `
      border-width: 0 0 2px 0 !important;
      padding: 2px 2px 0 2px;
      .icon-wrapper {
        top: 1px;
        right: 11px;
      }
  `};

    ${({ selectType }) => selectType === 'inline' && `
      border-width: 0 !important;
      padding: 2px 40px 0 2px;
      text-align: right;
      .icon-wrapper {
        top: 1px;
        right: 11px;
      }
  `};
`

export const StyledControlDropdown = styled.div`
  padding-left: 9px;
  padding-right: 11px;
  border-top-width: 0;
  box-shadow: none;
  padding-bottom: 10px;
  font-family: ${fonts.cera};
  position: relative;
  padding-top: 10px;
  z-index: 99;
  border-top: none;
  position: relative;
  top: -2px;
  border: 2px solid ${colors.black};
  border-radius: 0;
  transition: none;
  background-color: ${colors.white};
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  max-height: ${({ offset }) => `calc(100vh - ${offset}px)`};
  ${({ isVisible }) => isVisible && dropdownVisible};

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 8px;
    right: 8px;
    height: 2px;
    background-color: ${colors.black};
    z-index: 10;
  }

  > .icon-wrapper {
    position: absolute;
  }
`

export const StyledEmptyOption = styled.div`
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  height: 32px;
  line-height: 32px;
  color: ${colors.black};
  padding: 1px 16px 0;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  pointer-events: none;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`

export const StyledViewAllOption = styled.div`
  text-transform: uppercase;
  position: relative;
  height: 32px;
  line-height: 32px;
  padding: 1px 16px 0;
  font-weight: bold;
  color: ${colors.black};
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  border-bottom: 2px solid ${colors.black};
  font-size: 16px;
  outline: none;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`

export const StyledDefaultOption = styled.div`
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  color: ${colors.black};
  height: 32px;
  line-height: 32px;
  padding: 1px 16px 0;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease-in;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: ${({ bordered }) =>
        bordered ? `2px solid ${colors.black}` : 'none'};
  ${({ selected }) => selected && `
    background-color: ${colors.black};
    color: ${colors.white};
`};

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
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
`
