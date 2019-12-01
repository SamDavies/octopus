import PropTypes from 'prop-types'
import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import config from '../../config'
import { colors } from '../../styles'

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
    width: 250px;
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

const StyledLink = styled(Link)`
  line-height: 1;
  display: block;
  pointer-events: ${({ link }) => (link === 'true' ? 'auto' : 'none')};
`

const Logo = ({ color, link, size }) => (
    <StyledLogoWrapper size={size} color={color}>
        <StyledLink to='/' link={link.toString()}>
            <SVG src={`${config.staticUrl}/images/logo.svg`} />
        </StyledLink>
    </StyledLogoWrapper>
)

Logo.propTypes = {
    /** Logo size */
    size: PropTypes.oneOf(['default', 'normal', 'header']),
    /** Render inverted svg icon  */
    color: PropTypes.string,
    /** Is link available */
    link: PropTypes.bool
}

Logo.defaultProps = {
    size: 'default',
    color: 'black',
    link: true
}

export default Logo
