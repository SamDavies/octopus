import PropTypes from 'prop-types'
import styled from 'styled-components'
import colours from '../../constants/colours'
import fonts from '../../constants/fonts'

const Label = styled.label`
    margin-top: 20px;
    color: ${colours.black};
    font-family: ${fonts.cera};
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    
    ${({ disabled }) => disabled && `
        color: ${colours.lightGray};
    `}

    ${({ error }) => error && `
        color: ${colours.scarlet};
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
