import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.scss'

const StepIndicator = ({ progressData: { totalSteps, activeStep } }) => (
    <div className={styles.steps}>
        {Array.from(Array(totalSteps)).map((_, index) => (
            <div
                key={index} // eslint-disable-line react/no-array-index-key
                className={cx(
                    styles.steps__single,
                    index === Number(activeStep) - 1 && styles.steps__active
                )}
            />
        ))}
    </div>
)

StepIndicator.propTypes = {
    progressData: PropTypes.shape().isRequired
}

export default StepIndicator
