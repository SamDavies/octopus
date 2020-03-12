import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts } from '../../'

const Label = styled.label`
    margin-top: 20px;
    color: ${colors.black};
    font-family: ${fonts.cera};
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    
    ${({ disabled }) => disabled && `
        color: ${colors.lightGray};
    `}

    ${({ error }) => error && `
        color: ${colors.scarlet};
    `}
`

Label.propTypes = {
    /** Is input disabled */
    disabled: PropTypes.bool,
    /** Does input contain invalid string or was error received from props */
    error: PropTypes.string
}

Label.defaultProps = {
    error: '',
    disabled: false
}

export default Label
