import React, { Fragment } from 'react'

import { collaboratorsPropTypes } from '../../../config/prop-types'
import { CollaboratorLink } from '../StyledPortfolio'

const CollaboratorsList = ({ collaborators }) => (
    <Fragment>
        {collaborators &&
      collaborators.map(({ id, path, category, name }) => (
          <CollaboratorLink key={id} to={path}>
              {category} - {name}
          </CollaboratorLink>
      ))}
    </Fragment>
)

CollaboratorsList.propTypes = {
    collaborators: collaboratorsPropTypes.isRequired
}

export default CollaboratorsList
