import React from 'react'
import PropTypes from 'prop-types'
import CardFooter from '../CardParts/CardFooter'
import { StyledBrandCard, StyledImage } from './StyledBrandCard'

const BrandCard = ({ href, title, subTitle, followers, src, social }) => (
    <StyledBrandCard
        target='_blank'
        href={href}
        alt={title}
        style={{ backgroundImage: `url(${src})` }}
    >
        <StyledImage alt={title} src={src} />
        <CardFooter
            subTitle={subTitle}
            title={title}
            type={social}
            followers={followers}
        />
    </StyledBrandCard>
)

BrandCard.propTypes = {
    /** Card background-image src */
    src: PropTypes.string,
    /** potrfolio link */
    href: PropTypes.string,
    /** Card width */
    /** Card title */
    title: PropTypes.string,
    /** Card subTitle */
    subTitle: PropTypes.string,
    /** Number of followers */
    followers: PropTypes.number,
    /** brand social type */
    social: PropTypes.string.isRequired
}

BrandCard.defaultProps = {
    src: '',
    href: '',
    subTitle: '',
    title: '',
    followers: 0
}

export default BrandCard
