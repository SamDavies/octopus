import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { StyledText } from '../Text'

export const StyledErrorMessage = styled(StyledText).attrs(() => ({
    font: 'literata',
    size: 'small'
}))`
  font-size: 12px;
  font-family: ${fonts.literata};
  font-style: normal;
  font-stretch: normal;
  line-height: 18px;
  color: ${colors.scarlet};
  margin: 16.22px 0;
  text-align: left;
`

const ErrorMessage = ({ children }) => (
    <StyledErrorMessage>{children}</StyledErrorMessage>
)

ErrorMessage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}

export default ErrorMessage
