import React from 'react'
import PropTypes from 'prop-types'
import { StyledIcon, StyledImage } from './StyledOwnerIcon'

const OwnerIcon = ({
    allowRemoveBoards,
    toggleDeleteConfirm,
    ownerShortName,
    ownerImage
}) => (
    <div>
        {allowRemoveBoards ? (
            <StyledIcon onClick={toggleDeleteConfirm} type='icon_favourte_on' />
        ) : (
            <StyledImage
                style={{ backgroundImage: ownerImage ? `url(${ownerImage})` : 'none' }}
            >
                {!ownerImage && ownerShortName}
            </StyledImage>
        )}
    </div>
)

OwnerIcon.propTypes = {
    /** toggle remove board and owner icon */
    allowRemoveBoards: PropTypes.bool,
    /** toggle delete confirm overlay */
    toggleDeleteConfirm: PropTypes.func.isRequired,
    /** board owner avatar path */
    ownerImage: PropTypes.string,
    /** board owner short name */
    ownerShortName: PropTypes.string
}

OwnerIcon.defaultProps = {
    allowRemoveBoards: false,
    ownerImage: '',
    ownerShortName: ''
}

export default OwnerIcon
