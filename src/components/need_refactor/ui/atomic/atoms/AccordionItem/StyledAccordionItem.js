import styled, { css } from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import { device } from '../../../../../styles/mediaQueries'
import StyledText from '../Text/StyledText'

const { black, white } = colors

export const AngleIcon = styled.button`
  position: absolute;
  top: 4px;
  right: 5px;
  margin: 0;
  padding: 0;
  height: 3em;
  width: 3em;
  outline: 0;
  border: 0;
  background: none;
  text-indent: -9999%;
  pointer-events: none;
  transform: rotate(0deg);
  transition: transform 0.3s;
  @media ${device.tablet} {right: 12px}
  z-index: 9;
  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 9px;
    width: 2px;
    border-radius: 0.3em;
    background: ${black};
    transform-origin: 50%;
    top: 50%;
    left: 57%;
    transform: translate(75%, -50%) rotate(45deg);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 9px;
    width: 2px;
    border-radius: 0.3em;
    background: ${black};
    transform-origin: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-75%, -50%) rotate(-45deg);
  }
`

export const Title = styled(StyledText)`
  width: 100%;
  overflow: hidden;
  background: ${white};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 1em;
  padding-right: 3rem;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: 0;
  @media ${device.tablet} {padding-left: 1.125rem}
`

export const Body = styled.div`
  max-height: 0;
  overflow: hidden;
`

export const StyledAccordionItem = styled.div`
  position: relative;
  width: 100%;
  border-top: 2px solid ${black};
  outline: none;
  border-bottom: 2px solid ${({ isLast }) => (isLast ? black : 'transparent')};
  box-sizing: border-box;
  ${AngleIcon};
  ${({ isOpened, isLast }) =>
        isOpened &&
    css`
      border-bottom: 2px solid transparent;
      ${isLast &&
        `
          &:after {
            content: '';
            display: block;
            height: 6px;
            width: 100%;
            background-color: transparent;
          }
        `};
      @media ${device.tablet} {
        padding: 0px;
        border-right: 2px solid transparent;
        border-left: 2px solid transparent;
        border-radius: 3px;
      }
      ${AngleIcon} {
        transform: rotate(180deg);
        transition: transform 0.3s;
        right: 0px;
        @media ${device.tablet} {right: 4px}
        &:before,
        &:after {
          height: 9px;
          width: 2px;
        }
      }
      ${Title} {
        @media ${device.tablet} {padding-left: 1em}
      }
      ${Body} {
        padding: 15px;
        max-height: 300vh;
        transition: max-height 0.3s ease-in;
        @media ${device.tablet} {padding: 14px 15px}
         @media ${device.desktop} {padding: 1rem}
      }
    `};
`
