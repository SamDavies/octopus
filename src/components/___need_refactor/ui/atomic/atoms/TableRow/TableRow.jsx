import React from 'react'
import PropTypes from 'prop-types'
import StyledTableRow from './StyledTableRow'

const TableRow = ({ children }) => <StyledTableRow>{children}</StyledTableRow>

TableRow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default TableRow
