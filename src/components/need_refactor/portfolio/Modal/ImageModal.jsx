import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { collaboratorsPropTypes } from '../../../config/prop-types'
import { colors } from '../../../styles/global-styles'
import CloseIcon from '../../ui/atomic/atoms/Icons/CloseIcon'
import { ModalImageContainer, ImageFullSize, ModalVideo, ImageWrapper, CloseModalButton } from '../StyledPortfolio'
import CollaboratorsList from './CollaboratorsList'

class ImageModal extends PureComponent {
    componentDidMount () {
        document.addEventListener('keydown', this.onEscPress)
    }
    componentWillUnmount () {
        document.removeEventListener('keydown', this.onEscPress)
    }

  onEscPress = e => {
      if (e.keyCode === 27) {
          this.props.closeModal()
      }
  };

  render () {
      const { item, closeModal, imageSize } = this.props
      return (
          <ModalImageContainer>
              <ImageWrapper>
                  <CloseModalButton onClick={closeModal} position='right' >
                      <CloseIcon width='16' height='16' color={colors.black} />
                  </CloseModalButton>
                  {item.isVideo ? (
                      <ModalVideo controls alt={item.title} preload autoPlay poster={item.poster}>
                          <source src={item.url} type={item.mimeType} />
              Your browser does not support the video tag.
                      </ModalVideo>
                  ) : (
                      <ImageFullSize src={`${item.url}=s${imageSize}`} alt={item.title} id={item.id} />
                  )}

                  <CollaboratorsList collaborators={item.collaborators} />
              </ImageWrapper>
          </ModalImageContainer>
      )
  }
}

ImageModal.propTypes = {
    item: PropTypes.shape({
        mimeType: PropTypes.string,
        id: PropTypes.number,
        image: PropTypes.string,
        isVideo: PropTypes.bool,
        title: PropTypes.string,
        collaborators: collaboratorsPropTypes
    }),
    closeModal: PropTypes.func.isRequired,
    imageSize: PropTypes.number
}
ImageModal.defaultProps = {
    item: {},
    imageSize: 600
}

export default ImageModal
