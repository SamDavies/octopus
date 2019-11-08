import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'

const { black, white } = colors

const trapezeStyle = `
    display: block;
    content: " ";
    position: absolute;
    top: -2px;
    height: calc(100% + 2px);
    width: 0;
    width: 10px;
    background: ${white};
    border-top: 2px solid ${black};
`

export const TabsList = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 2px solid ${black};
`
export const TabsListContent = styled.div`
  display: flex;
  align-items: flex-end;
  left: 11px;
  position: relative;
`
export const Tab = styled.div`
  display: inline-flex;
  color: ${black};
  border-top: 2px solid ${black}
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  padding: 0.5rem 2rem 0.5rem;
  position: relative;
  background-color: ${white};
  margin-right: 11px;
  z-index: ${({ isActive, index = 1 }) => (isActive ? 999 : index)};
  height: ${({ isActive }) => (isActive ? 42 : 40)}px;
  bottom: ${({ isActive }) => (isActive ? -2 : 0)}px;
  outline: none;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  text-transform: uppercase;
  &:before {
    ${trapezeStyle}
    left: -6px;
    transform: skew(-11deg, 0deg);
    border-left: 2px solid ${black};
  }
  &:after {
    ${trapezeStyle}
    right: -6px;
    transform: skew(11deg, 0deg);
    border-right: 2px solid ${black};
  }
`
