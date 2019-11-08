import React from 'react'
import { validationLabelsPropTypes } from '../../../../../../config/prop-types'

import { ValidatePasswordLabels, ValidateTitle } from '../StyledPasswordInput'

const PasswordLabelsValidation = ({ options }) => (
    <ValidatePasswordLabels>
        {Object.keys(options).map(key => (
            <ValidateTitle key={key} valid={options[key].valid}>
                {options[key].title}
            </ValidateTitle>
        ))}
    </ValidatePasswordLabels>
)

PasswordLabelsValidation.propTypes = {
    options: validationLabelsPropTypes.isRequired
}

export default PasswordLabelsValidation
