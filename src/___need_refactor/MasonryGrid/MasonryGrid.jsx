import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { breakpoints } from '../../styles/global-styles'
import LoadMorePortfolioButton from './LoadMorePortfolioButton'
import { gridItemProp } from './propTypes'
import { MasonryItem } from './StyledMasonryGrid'

const columnsCountBreakPoints = {
    [breakpoints.mobile]: 2,
    [breakpoints.tablet]: 3,
    [breakpoints.desktop]: 4
}

class MasonryGrid extends PureComponent {
    render () {
        const { items, onLoadMoreClick, renderItem } = this.props
        return (
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry>
                    {items.map(
                        item =>
                            item.loadMore ? (
                                <LoadMorePortfolioButton key='loadmore' onLoadMoreClick={onLoadMoreClick} />
                            ) : (
                                <MasonryItem key={item.id}>{renderItem(item)}</MasonryItem>
                            )
                    )}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}

MasonryGrid.propTypes = {
    items: PropTypes.arrayOf(gridItemProp).isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired
}

export default MasonryGrid
