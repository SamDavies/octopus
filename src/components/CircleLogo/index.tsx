import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as LogoImage } from '../../static/images/logo_stacked.svg'
import colors from '../../constants/colors'

type Props = {
    inverted: boolean
    size: 'small' | 'medium' | 'large'
}

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

const StyledCircleLogoWrapper = styled.div<Props>`
  position: relative;
  border: solid ${colors.black};
  box-sizing: border-box;
  background: ${props => props.inverted ? colors.black : colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  svg {
    max-height: 100%;
    height: 55px;
    width: 123px;
    margin: auto;
    max-width: 100%;
  }

  ${props => props.size && logoSizes[props.size]}

  .logo-text {
    fill:  ${props => props.inverted ? colors.white : colors.black};
  }

`

const StyledLink = styled.div`
  line-height: 1;
  display: block;
`

const CircleLogo: React.FC<Props> = props => (
    <StyledCircleLogoWrapper
        inverted={props.inverted}
        size={props.size}
        className='logo-wrapper'
    >
        <StyledLink>
            <LogoImage />
        </StyledLink>
    </StyledCircleLogoWrapper>
)

CircleLogo.defaultProps = {
    inverted: false,
    size: 'large'
}

export default CircleLogo
