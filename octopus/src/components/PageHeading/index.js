// eslint-disable-next-line
import styled from 'styled-components'
import { StyledHeading } from '../Heading'

const StyledPageHeading = styled(StyledHeading).attrs(props => ({
    level: 2,
    uppercase: true
}))`
  margin: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`

export default StyledPageHeading
