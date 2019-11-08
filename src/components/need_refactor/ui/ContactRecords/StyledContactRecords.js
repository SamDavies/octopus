import styled from 'styled-components'
import { device } from '../../../styles/mediaQueries'
import { colors } from '../../../styles/global-styles'

const { black } = colors

export const StyledContactRecords = styled.div`
  color: ${black};
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const StyledLink = styled.a`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

export const StyledContactRecord = styled.div``

export const StyledContactRecordHeader = styled.div`
  border-bottom: 2px solid ${black};
`

export const StyledContactRecordContent = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const StyledContactRecordDepartment = styled.div`
  margin: 1rem 0;
  @media ${device.tablet} {
    width: 50%;
    padding: 0 2rem 0 0;
  }
`

export const StyledContactItem = styled.div`
  word-break: break-all;
`
