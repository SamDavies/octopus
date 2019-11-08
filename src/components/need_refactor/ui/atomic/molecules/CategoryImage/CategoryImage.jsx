import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledCategoryImage,
    StyledImage,
    StyledLink
} from './StyledCategoryImage'

/**
 * Parent element shold set image size or it will take 100% width
 */
const CategoryImage = ({ item, imageSize }) => (
    <StyledCategoryImage>
        <StyledImage src={`${item['image-url']}=s${imageSize}`} alt={item.title} />
        <StyledLink to={item['destination-path'] || '/'}>{item.title}</StyledLink>
    </StyledCategoryImage>
)

CategoryImage.propTypes = {
    // Image item
    item: PropTypes.shape({
    // If the user clicks on the image' title this is the path they go to
        'destination-path': PropTypes.string.isRequired,
        // Title of cover photo
        title: PropTypes.string.isRequired,
        // url of image
        'image-url': PropTypes.string.isRequired
    }).isRequired,
    imageSize: PropTypes.number.isRequired
}

export default CategoryImage
