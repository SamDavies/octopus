import colors from '../../constants/colors'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
    background-color: #ffffff;
    border: solid 2px ${colors.black};
        
    ${props => !props.noPadding && `
        padding: 20px;
    `}
`

Box.propTypes = {
    noPadding: PropTypes.bool
}

Box.defaultProps = {
    noPadding: false
}

export default Box
