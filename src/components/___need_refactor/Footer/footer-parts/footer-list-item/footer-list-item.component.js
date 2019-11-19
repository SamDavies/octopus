import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../../styles/global-styles'

const ListItem = styled.li`
  padding: 0;
`
const ListItemLink = styled(Link)`
  font-size: 13px;
  font-weight: bold;
  line-height: 32px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -7px;
    left: 0;
    background-color: ${colors.white};
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out 0s;
  }

  &:focus {
    color: ${colors.white};
  }

  &:hover {
    color: ${colors.white};
    &:before {
      visibility: visible;
      opacity: 1;
      width: 100%;
    }
  }
`

const FooterListItem = ({ url, title, modal, openModal }) => (
    <ListItem>
        {url ? (
            <ListItemLink to={url}>{title}</ListItemLink>
        ) : (
            <ListItemLink to='#' role='button' tabIndex={0} onClick={() => openModal(modal)}>
                {title}
            </ListItemLink>
        )}
    </ListItem>
)

FooterListItem.propTypes = {
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string.isRequired,
    modal: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    openModal: PropTypes.func
}

FooterListItem.defaultProps = {
    url: null,
    modal: null
}

export default FooterListItem
