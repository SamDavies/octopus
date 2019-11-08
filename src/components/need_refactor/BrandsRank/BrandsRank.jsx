import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBrands } from '../../redux/brands'

import Heading from '../ui/atomic/atoms/Heading'
import HeadTitle from '../HeadTitle'
import { Wrapper } from './StyledBrandsRank'
import BrandsRankFilter from './BrandsRankFilter'
import BrandsList from './BrandsList'

class BrandsRank extends Component {
    componentDidMount () {
        this.props.fetchBrands()
    }

  handleSelectChange = name => ({ value }) => {
      this.props.onFilterChange(name, value)
  };

  render () {
      const {
          categories,
          sort,
          social,
          category
      } = this.props
      return (
          <Fragment>
              <HeadTitle title='Brands' />
              <Wrapper>
                  <Heading level={2} uppercase bold>
            brands
                  </Heading>
                  <BrandsRankFilter
                      categories={categories}
                      sort={sort}
                      social={social}
                      category={category}
                      onFilterChange={this.handleSelectChange}
                      openSubscribeModal={this.openSubscribeModal}
                  />
                  <BrandsList />
              </Wrapper>
          </Fragment>
      )
  }
}

BrandsRank.propTypes = {
    categories: PropTypes.object.isRequired,
    sort: PropTypes.string.isRequired,
    social: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    fetchBrands: PropTypes.func.isRequired
}

export default connect(
    null,
    {
        fetchBrands
    }
)(BrandsRank)
