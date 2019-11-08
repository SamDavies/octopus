import styled from 'styled-components'
import StyledText from '../ui/atomic/atoms/Text/StyledText'
import { device } from '../../styles/mediaQueries'

export const Text = styled(StyledText)`
  margin: 1rem 0px;
  text-align: center;
`

export const FormContainer = styled.form`
  width: 100%;
  padding: 2.5rem 2rem;
  @media ${device.tablet} {padding: 2.5rem 10rem}
  @media ${device.desktop} {padding: 2.5rem 8rem}
`

export const InputHolder = styled.div`
  margin-bottom: 30px;
`

export const FormContent = styled.div`
  padding-top: 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonHolder = styled.div`
  align-self: center;
`
