import styled from 'styled-components'
import { colors } from '../../../../../styles/global-styles'
import StyledText from '../../atoms/Text/StyledText'

const { white, semiBlack } = colors

export const StyledNotification = styled.div`
  display: fixed;
  max-width: 384px;
  padding: 16px 24px;
  top: 30px;
  right: 30px;
  border-radius: 4px;
  background-color: ${white};
  box-shadow: 0 4px 12px ${semiBlack};
`

export const Content = styled.div`
  display: flex;
  width: 100%;
`

export const MessageContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  ${StyledText} {
    margin: 0;
    padding-right: 16px;
  }
`

export const Warning = styled.div`
  margin-right: 10px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 4px 0px;
  cursor: pointer;
`
