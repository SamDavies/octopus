import styled from 'styled-components'
import { fonts } from '../../../../../../../../styles/global-styles'

export const StyledFollowersContent = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

export const StyledFollowersText = styled.span`
  font-family: ${fonts.primary};
  font-size: 16px;
  line-height: 8px;
  margin-right: 3px;
  font-weight: 600;
`
