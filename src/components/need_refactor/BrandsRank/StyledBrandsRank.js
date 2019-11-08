import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'
import { indents, colors } from '../../styles/global-styles'
import { container } from '../../utils/styleHelpers/mixins'
import StyledUnderlinedButton from '../ui/atomic/atoms/Button/UnderlinedButton/StyledUnderlinedButton'

export const Wrapper = styled.div`
  padding: 3rem 0 5rem 0;
  ${container};
`

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  @media ${device.tablet} {
    justify-content: space-between;
    flex-direction: row;
    padding: ${indents.tablet}rem ${indents.tablet / 2}rem;
  }
  @media ${device.desktop} {
    padding: ${indents.desktop}rem ${indents.desktop / 2}rem;
  }
`

export const FilterItem = styled.div`
  width: 100%;
  ${container} padding: 0 0 1.5rem 0;
  @media ${device.tablet} {
    padding: 0 ${indents.tablet / 2}rem;
    width: 33.333%;
  }

  @media ${device.desktop} {
    padding: 0 ${indents.desktop / 2}rem;
  }
`

export const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const SubscribeFormRow = styled.div`
  margin-bottom: 1.5rem;
`

export const BrandResults = styled.div`
  margin: 0 ${indents.tablet}rem ${indents.tablet}rem;
  @media ${device.tablet} {
    margin: 0 ${indents.tablet}rem ${indents.tablet}rem;
  }
  @media ${device.desktop} {
    margin: 0 ${indents.desktop}rem ${indents.desktop}rem;
  }
  text-align: left;
  font-family: Georgia;
  font-size: 13px;
  font-weight: bold;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${colors.black};
`

export const ClearButton = styled(StyledUnderlinedButton)`
  display: inline;
  margin-left: 0.5rem;
`
