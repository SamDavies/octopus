import React from 'react'
import PropTypes from 'prop-types'
import { LoadMore, LoadMoreButton } from './StyledMasonryGrid'

const LoadMorePortfolioButton = ({ onLoadMoreClick }) => (
    <LoadMore>
        <LoadMoreButton onClick={onLoadMoreClick}>See more</LoadMoreButton>
    </LoadMore>
)

LoadMorePortfolioButton.propTypes = {
    onLoadMoreClick: PropTypes.func.isRequired
}

export default LoadMorePortfolioButton
