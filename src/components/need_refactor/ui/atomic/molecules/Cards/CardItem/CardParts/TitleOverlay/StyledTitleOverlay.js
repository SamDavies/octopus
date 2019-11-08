import styled from 'styled-components'
import { centerAbs } from '../../../../../../../../utils/styleHelpers/mixins'
import StyledText from '../../../../../atoms/Text/StyledText'

export default styled(StyledText)`
  ${centerAbs()};
  font-weight: 500;
  z-index: 5;
  text-align: center;
`
