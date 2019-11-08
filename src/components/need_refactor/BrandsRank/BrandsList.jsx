import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectFilteredBrands } from '../../redux/brands'
import BrandCard from '../ui/atomic/molecules/Cards/CardItem/BrandCard'
import CardList from '../ui/atomic/molecules/Cards/CardList'
import { platformUrls } from '../../config/brandsRank'

import { brandProp } from './propTypes'
import { BrandResults, ClearButton } from './StyledBrandsRank'

const BrandsList = ({ brands, socialPlatform, showClearButton, resetFilter, categories }) => (
    <div>
        <BrandResults>
            {brands.length} Results
            {showClearButton && (
                <ClearButton
                    onClick={resetFilter}
                    uppercase={false}
                    bold={false}
                    size='small'
                >
          Clear all
                </ClearButton>
            )}
        </BrandResults>
        <CardList>
            {brands.map(({ categoryId, name, logoUrl, social }) => (
                <BrandCard
                    key={name}
                    social={socialPlatform}
                    title={name}
                    subTitle={categories[categoryId].name}
                    src={logoUrl}
                    href={`${platformUrls[socialPlatform]}${social[socialPlatform].handle}`}
                    followers={social[socialPlatform] ? social[socialPlatform].followerCount : 0}
                />
            ))}
        </CardList>
    </div>
)

BrandsList.propTypes = {
    brands: PropTypes.arrayOf(brandProp).isRequired,
    showClearButton: PropTypes.bool.isRequired,
    resetFilter: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    socialPlatform: PropTypes.string.isRequired
}

export default connect(
    state => ({
        brands: selectFilteredBrands(state),
        socialPlatform: state.brands.filterSettings.social,
        categories: state.taxonomies.brand.categories.byId
    })
)(BrandsList)
