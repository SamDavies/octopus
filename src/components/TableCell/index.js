import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts } from '../../styles'

export const TableCell = styled.div`
    ${props => props.flex && `
        flex: ${props.flex}
    `}
    ${props => props.width && `
        width: ${props.width}
    `}
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 8px;
    font-family: ${fonts.cera};
    font-size: 14px;
`

TableCell.propTypes = {
    flex: PropTypes.number,
    width: PropTypes.number
}

TableCell.defaultProps = {
    flex: null,
    width: null
}

export default TableCell
