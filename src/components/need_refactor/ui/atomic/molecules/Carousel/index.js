import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import { StyledCarousel, GlobalStyle } from './StyledCarousel'

class Carousel extends PureComponent {
    render () {
        const {
            items,
            renderItem,
            height,
            interval
        } = this.props

        const sliderProps = {
            dots: false,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            arrows: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            autoplay: true,
            autoplaySpeed: interval,
            pauseOnHover: false
        }

        return (
            <Fragment>
                <GlobalStyle />
                <StyledCarousel height={height}>
                    <Slider {...sliderProps}>
                        {items && items.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    {renderItem({ item, index })}
                                </Fragment>
                            )
                        })}
                    </Slider>
                </StyledCarousel>
            </Fragment>)
    }
}

Carousel.propTypes = {
    timeout: PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number
    }),
    animationClassNames: PropTypes.string,
    carouselStopped: PropTypes.bool,
    interval: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    height: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape(),
            PropTypes.func,
            PropTypes.string,
            PropTypes.node
        ])
    )
}

Carousel.defaultProps = {
    timeout: { enter: 500, exit: 500 },
    animationClassNames: 'carousel',
    carouselStopped: false,
    interval: 4000,
    height: 'auto',
    items: []
}

export default Carousel
