import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { device, size } from '../../constants/sizes'

// https://iamsteve.me/blog/entry/using-flexbox-for-horizontal-scrolling-navigation
const StyledScroll = css`
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    
    &::-webkit-scrollbar {
        display: none; 
    }
    
    & > * {
        flex: 0 0 auto;
    }
`

const HorizontalScroll = styled.div`
    display: flex;
    
    ${props => props.mobileOnly && `
        @media (max-width: ${size.mobile}) {
            ${StyledScroll}
        }
        
        @media ${device.tablet} {
            width: 100%;
        }
    `}
    ${props => !props.mobileOnly && StyledScroll}
`

HorizontalScroll.propTypes = {
    mobileOnly: PropTypes.bool
}

HorizontalScroll.defaultProps = {
    mobileOnly: true
}

export default HorizontalScroll
