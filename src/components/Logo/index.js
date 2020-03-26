import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as LogoImage } from '../../static/images/logo.svg'
import colors from '../../styles/colors'

const logoSizes = {
    default: css`
        width: 100%;
    `,
    normal: css`
        margin: 0 auto;
        width: 320px;
    `,
    header: css`
        margin: 0 auto;
        max-width: 80%;
    `
}

const StyledLogoWrapper = styled.div`
  position: relative;
  ${({ size }) => logoSizes[size]};
  svg {
      width: 100%;
  }
  
  .logo-text {
        fill: ${({ color }) => colors[color]};
  }
`

const StyledLink = styled.div`
  line-height: 1;
  display: block;
`

const Logo = ({ color, size }) => (
    <StyledLogoWrapper size={size} color={color}>
        <StyledLink>
            <LogoImage />
        </StyledLink>
    </StyledLogoWrapper>
)

Logo.propTypes = {
    /** Logo size */
    size: PropTypes.oneOf(['default', 'normal', 'header']),
    /** Render inverted svg icon  */
    color: PropTypes.string
}

Logo.defaultProps = {
    size: 'default',
    color: 'black'
}

export default Logo
