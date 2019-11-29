import React from 'react'
import PropTypes from 'prop-types'
import { StyledStepIndicator, StyledStepItem } from './StyledStepIndicator'

const StepIndicator = ({ progressData: { totalSteps, activeStep } }) => (
    <StyledStepIndicator>
        {Array.from(Array(totalSteps)).map((_, index) => (
            <StyledStepItem
                key={index} // eslint-disable-line react/no-array-index-key
                isActive={index === Number(activeStep) - 1}
            />
        ))}
    </StyledStepIndicator>
)

StepIndicator.propTypes = {
    progressData: PropTypes.shape().isRequired
}

export default StepIndicator
