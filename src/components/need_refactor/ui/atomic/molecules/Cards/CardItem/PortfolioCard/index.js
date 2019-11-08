import { colors } from '../../../../../../../styles/global-styles'
import PropTypes from 'prop-types'
import sample from 'lodash/sample'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CardFooter from '../CardParts/CardFooter'
import Placeholder1 from '../../../../../../../static/images/new-design/placeholder-1.jpg'
import Placeholder2 from '../../../../../../../static/images/new-design/placeholder-2.jpg'
import Placeholder3 from '../../../../../../../static/images/new-design/placeholder-3.jpg'

const { white, black } = colors

const imagePlaceholders = [
    Placeholder1,
    Placeholder2,
    Placeholder3
]

// https://css-tricks.com/preventing-a-grid-blowout/
const StyledGridElement = styled.div`
    min-width: 0;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${({ showBorder }) => showBorder && `
        padding: 25px;
        border: 2px solid ${black};
        background-color: ${white};
    `};
`

const StyledImageContainer = styled.div`
    height: 0;
    width: 100%;
    padding-top: 100%;
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: contain;
`

const StyledInitials = styled.div`
    height: 100%;
    width: 100%;
    font-size: 24px;
    margin-top: -50%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: ${colors.white};
`

const PortfolioCard = props => {
    const {
        context,
        title,
        subTitle,
        followers,
        src,
        externalLink,
        path
    } = props

    if (externalLink) {
        return <StyledGridElement>
            <StyledContainer showBorder={context === 'production' || context === 'agency' || context === 'brand'}>
                <StyledImageContainer image={src ? `${src}=s400${props.crop ? '-c' : ''}` : sample(imagePlaceholders)}>
                    {!src && <StyledInitials>
                            Coming Soon
                    </StyledInitials>}
                </StyledImageContainer>
            </StyledContainer>
            <CardFooter subTitle={subTitle} title={title} followers={followers} type='instagram' />
        </StyledGridElement>
    }

    return <StyledGridElement>
        <Link to={path}>
            <StyledContainer showBorder={context === 'production' || context === 'agency' || context === 'brand'}>
                <StyledImageContainer image={src ? `${src}=s400${props.crop ? '-c' : ''}` : sample(imagePlaceholders)}>
                    {!src && <StyledInitials>
                        Coming Soon
                    </StyledInitials>}
                </StyledImageContainer>
            </StyledContainer>
            <CardFooter subTitle={subTitle} title={title} followers={followers} type='instagram' />
        </Link>
    </StyledGridElement>
}

PortfolioCard.propTypes = {
    /** Card background-image src */
    src: PropTypes.string,
    /** potrfolio link */
    path: PropTypes.string,
    /** Card context */
    context: PropTypes.string,
    crop: PropTypes.bool,
    /** "Like" callback */
    onLikeClick: PropTypes.func,
    /** Card title */
    title: PropTypes.string,
    /** Card subTitle */
    subTitle: PropTypes.string,
    /** Number of followers */
    followers: PropTypes.number,
    /** Has no internal link */
    externalLink: PropTypes.bool
}

PortfolioCard.defaultProps = {
    crop: false,
    context: 'Talent',
    src: '',
    path: '',
    subTitle: '',
    onLikeClick: () => null,
    externalLink: false,
    title: '',
    followers: 0
}

export default PortfolioCard
