import throttle from 'lodash/throttle'
import PropTypes from 'prop-types'
import React from 'react'
import { childrenPropType } from '../../config/prop-types'

class InfiniteScroll extends React.Component {
    sentinel
    scrollHandler
    resizeHandler

    componentDidMount () {
        this.scrollHandler = throttle(this.checkWindowScroll, this.props.throttle)
        this.resizeHandler = throttle(this.checkWindowScroll, this.props.throttle)

        window.addEventListener('scroll', this.scrollHandler)
        window.addEventListener('resize', this.resizeHandler)
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.scrollHandler)
        window.removeEventListener('resize', this.resizeHandler)
    }

    checkWindowScroll = () => {
        if (this.props.isLoading) {
            return
        }

        if (
            this.props.hasMore &&
            this.sentinel.getBoundingClientRect().top - window.innerHeight <
            this.props.threshold
        ) {
            this.props.onLoadMore()
        }
    }

    render () {
        // eslint-disable-next-line
        const sentinel = <div ref={i => this.sentinel = i} />

        if (this.props.render) {
            return this.props.render({
                sentinel,
                children: this.props.children
            })
        }

        if (this.props.component) {
            const Container = this.props.component
            return (
                <Container sentinel={sentinel}>
                    {this.props.children}
                </Container>
            )
        }

        return (
            <div>
                {this.props.children}
                {sentinel}
            </div>
        )
    }
}

InfiniteScroll.propTypes = {
    /**
     * Does the resource have more entities
     */
    hasMore: PropTypes.bool.isRequired,

    /**
     * Should show loading
     */
    isLoading: PropTypes.bool.isRequired,

    /**
     * Callback to load more entities
     */
    onLoadMore: PropTypes.func.isRequired,

    /**
     * Scroll threshold
     */
    threshold: PropTypes.number,

    /**
     * Throttle rate
     */
    throttle: PropTypes.number,

    /**
     * Callback for convenient inline rendering and wrapping
     */
    render: PropTypes.func,

    /**
     * A React component to act as wrapper
     */
    component: PropTypes.any,

    children: childrenPropType
}

InfiniteScroll.defaultProps = {
    threshold: 100,
    throttle: 64,
    render: null,
    component: null
}

export default InfiniteScroll
