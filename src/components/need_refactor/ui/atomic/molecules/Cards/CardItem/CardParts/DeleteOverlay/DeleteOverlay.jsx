import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyledDeleteOverlay,
    StyledDeleteText,
    StyledDeleteButton,
    StyledCancelButton
} from './StyledDeleteOverlay'

class DeleteOverlay extends Component {
  handleOverlayClick = e => {
      e.stopPropagation()
      e.preventDefault()
  };
  render () {
      const { onConfirmClick, onCancelClick, message } = this.props
      return (
          <StyledDeleteOverlay onClick={this.handleOverlayClick}>
              <StyledDeleteText uppercase bold>
                  {message}
              </StyledDeleteText>
              <StyledDeleteButton size='large' onClick={onConfirmClick}>
          Yes, remove
              </StyledDeleteButton>
              <StyledCancelButton size='large' onClick={onCancelClick}>
          Cancel
              </StyledCancelButton>
          </StyledDeleteOverlay>
      )
  }
}

DeleteOverlay.propTypes = {
    /** on confirm delete click callback */
    onConfirmClick: PropTypes.func.isRequired,
    /** on cancel delete click callback */
    onCancelClick: PropTypes.func.isRequired,
    /** delete overlay message */
    message: PropTypes.string
}
DeleteOverlay.defaultProps = {
    message: 'Are you sure you want to remove this contact?'
}

export default DeleteOverlay
