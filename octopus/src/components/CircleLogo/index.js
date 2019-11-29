import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ReactComponent as LogoImage } from '../../static/images/logo_stacked.svg'
import { colors } from '../../styles'

const logoSizes = {
    small: css`
    width: 50px;
    height: 50px;
    border-width: 2px;
    padding: 7px;
  `,
    medium: css`
    width: 100px;
    height: 100px;
    padding: 10px;
  `,
    large: css`
    width: 180px;
    height: 180px;
    border-width: 5px;
    padding: 25px;
  `
}

const StyledCircleLogoWrapper = styled.div`
  position: relative;
  border: solid ${colors.black};
  box-sizing: border-box;
  background: ${({ inverted }) => inverted ? colors.black : colors.white};
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  svg {
    margin: auto;
    max-width: 100%;
  }

  ${({ size }) => size && logoSizes[size]}
  
  .logo-text {
    fill:  ${({ inverted }) => inverted ? colors.white : colors.black};
  }
  
`

const StyledLink = styled(Link)`
  line-height: 1;
  display: block;
  pointer-events: ${({ link }) => (link === 'true' ? 'auto' : 'none')};
`

const CircleLogo = ({ inverted, link, size }) => (
    <StyledCircleLogoWrapper inverted={inverted} size={size}>
        <StyledLink to='/' link={link.toString()}>
            <LogoImage />
        </StyledLink>
    </StyledCircleLogoWrapper>
)

CircleLogo.propTypes = {
    inverted: false,
    link: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

CircleLogo.defaultProps = {
    inverted: false,
    link: true,
    size: 'large'
}

export default CircleLogo
