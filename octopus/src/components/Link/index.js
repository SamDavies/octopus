import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '../../constants'

export const StyledLink = styled.a`
  text-transform: uppercase;
  display: inline-block;
  background: transparent;
  font-family: ${fonts.cera};
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 13px;
  border: 0;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${colors.lightSalmon};
  }
  &:active {
    color: ${colors.coral};
  }

  ${({ disabled }) => disabled && `
       color: ${colors.cloud} !important;
  `}
`

const Link = props => {
    const onClick = e => props.disabled ? e.preventDefault() : true
    const isExternalLink = /^(http(s)?:)?\/{2}/i.test(String(props.to))
    if (isExternalLink) {
        return (
            <StyledLink href={props.to} onClick={onClick} disabled={props.disabled}>{props.children}</StyledLink>
        )
    }

    return (
        <StyledLink
            to={props.to}
            onClick={onClick}
            disabled={props.disabled}
            as={RouterLink}
        >{props.children}</StyledLink>
    )
}

Link.propTypes = {
    disabled: PropTypes.bool,
    to: PropTypes.oneOfType([
        PropTypes.objectOf(
            PropTypes.shape({
                pathname: PropTypes.string,
                state: PropTypes.object
            })
        ),
        PropTypes.string
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
}

Link.defaultProps = {
    disabled: false,
    to: ''
}

export default Link
