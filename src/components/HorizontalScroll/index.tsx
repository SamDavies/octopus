import styled, { css } from 'styled-components'
import { MediaQuery, Size } from '../../constants/sizes'

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

type Props = {
    mobileOnly?: boolean;
}

const HorizontalScroll = styled.div<Props>`
    display: flex;

    ${(props): string => props.mobileOnly ? `
        @media (max-width: ${Size.mobile}) {
            ${StyledScroll}
        }

        @media ${MediaQuery.tablet} {
            width: 100%;
        }
    ` : ''}
    ${(props): string => !props.mobileOnly ? `${StyledScroll}` : ''}
`

HorizontalScroll.defaultProps = {
    mobileOnly: true
}

export default HorizontalScroll
