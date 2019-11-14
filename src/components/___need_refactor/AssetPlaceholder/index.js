import PropTypes from 'prop-types'
import React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const StyledPlaceholderContainer = styled.div`
    width: 100%;
`

const AssetPlaceholder = props =>
    [...Array(props.count).keys()].map(index => <StyledPlaceholderContainer key={`placeholder-${index}`}>
        <ContentLoader
            key={`placeholder-${index}`}
            height={480}
            preserveAspectRatio='none'
            ariaLabel='Loading data...'
            interval={0.25}
            speed={2}
            width={400}
            primaryColor='#f0f0f0'
            secondaryColor='#e0e0e0'
        >
            <rect x='0' y='0' rx='5' ry='5' width='400' height='400' />
            <circle cx='30' cy='440' r='30' />
            <rect x='75' y='423' rx='4' ry='4' width='100' height='13' />
            <rect x='75' y='447' rx='4' ry='4' width='50' height='8' />
        </ContentLoader>
    </StyledPlaceholderContainer>)

AssetPlaceholder.propTypes = {
    count: PropTypes.number
}

AssetPlaceholder.defaultProps = {
    count: 0
}

export default AssetPlaceholder
