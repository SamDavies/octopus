import React from 'react'
import PropTypes from 'prop-types'
import CoralButton from '../atomic/atoms/Button/CoralButton'
import { Link } from 'react-router-dom'
import {
    CategoriesListItem,
    CategoriesListItemImage,
    CategoriesListItemTitle,
    CategoriesListItemText,
    CategoriesListItemBody,
    CategoriesListItemHeader,
    CategoriesListItemCta
} from './styles'

import authImage1 from '../../../static/images/new-design/image-homepage-card-1.jpg'
import authImage2 from '../../../static/images/new-design/image-homepage-card-2.jpg'
import authImage3 from '../../../static/images/new-design/image-homepage-card-3.jpg'

const authImages = [
    authImage1,
    authImage2,
    authImage3
]

/**
 * Parent element shold set ImageSTA size or it will take 100% width
 */
const ImageCTA = ({ item, imageSize, index, itemDescription, isAuthenticated }) => (
    <CategoriesListItem isAuthenticated={isAuthenticated}>
        <CategoriesListItemImage isAuthenticated={isAuthenticated} index={index}>
            <img src={`${isAuthenticated ? authImages[index] : item['image-url'] + `=s${imageSize}`}`} alt={item.title} />
        </CategoriesListItemImage>
        <CategoriesListItemTitle isAuthenticated={isAuthenticated}>
            <Link to={item['destination-path'] || '/'}>
                {item.title}
            </Link>
        </CategoriesListItemTitle>
        { isAuthenticated && (
            <CategoriesListItemText>
                <CategoriesListItemHeader>
                    {item.title}
                </CategoriesListItemHeader>
                <CategoriesListItemBody>
                    {itemDescription}
                </CategoriesListItemBody>
                <CategoriesListItemCta>
                    <Link to={item['destination-path'] || '/'}>
                        <CoralButton
                            size='large'
                            type='button'
                        >
                            See {item.title}
                        </CoralButton>
                    </Link>
                </CategoriesListItemCta>
            </CategoriesListItemText>
        )}

    </CategoriesListItem>
)

ImageCTA.propTypes = {
    // CTA Image item
    item: PropTypes.shape({
    // If the user clicks on the image' title this is the path they go to
        'destination-path': PropTypes.string.isRequired,
        // Title of cover photo
        title: PropTypes.string.isRequired,
        // url of image
        'image-url': PropTypes.string.isRequired
    }).isRequired,
    imageSize: PropTypes.number.isRequired,
    index: PropTypes.number,
    itemDescription: PropTypes.string,
    isAuthenticated: PropTypes.bool
}

export default ImageCTA
