import styled from 'styled-components'
import StyledText from '../Text/StyledText'
import { device } from '../../../../../styles/mediaQueries'
import { colors, fonts } from '../../../../../styles/global-styles'

const { black, white, aqua, brightRed } = colors
export const TextareaContainer = styled.div`
  display: block;
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 7.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border: ${({ error }) =>
        error ? `solid 2px ${brightRed}` : `solid 2px ${black}`};
  font-family: ${fonts.miller};
  font-size: 12px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 2px;
  color: ${black};
  background-color: ${white};
  /* replace with RGBA helper */
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  resize: none;
  transition: all 0.15s ease-in;
  @media ${device.tablet} {height: 120px}
  &:focus {
    box-shadow: 0 0 0 4px ${aqua};
  }
  &::placeholder {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    font-family: ${fonts.primary};
    text-transform: uppercase;
  }
`

export const Remaining = styled.div`
  display: flex;
  align-items: center;
`

export const RemainingCounter = styled.div`
  background-color: ${black};
  color: ${white};
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  font-family: ${fonts.primary};
  font-size: 0.8rem;
`
export const RemainingText = styled(StyledText)`
  margin: 0;
`
