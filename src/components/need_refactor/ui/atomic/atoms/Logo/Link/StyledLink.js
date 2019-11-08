import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
  line-height: 1;
  display: block;
  pointer-events: ${({ link }) => (link === 'true' ? 'auto' : 'none')};
`
