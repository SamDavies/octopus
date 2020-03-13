import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../styles/colors'

const Panel = styled.div`
    flex: 1;
    background-color: #ffffff;
    overflow: hidden;
    ${props => props.responsive && `
        border-top: 1px solid ${colors.grey8};
        border-bottom: 1px solid ${colors.grey8};
    
        @media (min-width: 576px) {
            border-radius: 2px;
            border-right: 1px solid ${colors.grey8};
            border-left: 1px solid ${colors.grey8};
        }
    `}
        
    ${props => !props.noPadding && `
        padding: 20px
    `}
        
    ${props => !props.responsive && `
        border-radius: 2px;
        border: 1px solid ${colors.grey8};
    `}
        
    ${props => props.mobileHidden && `
        @media (max-width: 576px) {
            border: none;
            padding: 0px
        }
    `}
`

Panel.propTypes = {
    responsive: PropTypes.bool,
    noPadding: PropTypes.bool,
    mobileHidden: PropTypes.bool
}

Panel.defaultProps = {
    responsive: true,
    noPadding: false,
    mobileHidden: false
}

export default Panel
