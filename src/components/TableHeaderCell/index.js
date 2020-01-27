import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TableCell } from '../TableCell'

export const TableHeaderCell = styled(TableCell)`
    font-weight: 600;
`

TableHeaderCell.propTypes = {
    flex: PropTypes.number,
    width: PropTypes.number
}

TableHeaderCell.defaultProps = {
    flex: null,
    width: null
}

export default TableHeaderCell
