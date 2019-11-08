import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectCategoriesCollection } from '../../redux/taxonomies'
import { updateFilterValues } from '../../redux/brands'

import Select from '../ui/atomic/molecules/Select'
import { socialOptions, sortOptions } from '../../config/brandsRank'

import { FilterItem, Filter } from './StyledBrandsRank'
import { optionProp } from './propTypes'

/* eslint-disable no-shadow */
const BrandsRankFilter = ({
    categories,
    filterSettings: {
        category,
        social,
        sort
    },
    updateFilterValues
}) => {
    const onFilterChange = name => ({ value }) => {
        updateFilterValues({ name, value })
    }

    return (
        <Filter>
            <FilterItem>
                <Select
                    placeholder='All'
                    onChange={onFilterChange('category')}
                    options={categories}
                    value={category}
                />
            </FilterItem>
            <FilterItem>
                <Select
                    onChange={onFilterChange('social')}
                    options={socialOptions}
                    value={social}
                />
            </FilterItem>
            <FilterItem>
                <Select
                    onChange={onFilterChange('sort')}
                    options={sortOptions}
                    value={sort}
                />
            </FilterItem>
        </Filter>
    )
}

BrandsRankFilter.propTypes = {
    categories: PropTypes.arrayOf(optionProp).isRequired,
    filterSettings: PropTypes.object.isRequired,
    updateFilterValues: PropTypes.func.isRequired
}

export default connect(
    state => ({
        categories: selectCategoriesCollection(state, { context: 'brand' }).map(el => ({ value: el.id, label: el.name })),
        filterSettings: state.brands.filterSettings
    }), { updateFilterValues }
)(BrandsRankFilter)
