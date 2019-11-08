import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'

import locale from '../../localisation/en-gb.json'
import { testEmail } from '../../utils/forms/validators'
import StandardModal from '../ui/modals/StandardModal'
import Heading from '../ui/atomic/atoms/Heading'
import Text from '../ui/atomic/atoms/Text'
import Input from '../ui/atomic/atoms/Input'
import ContainedButton from '../ui/atomic/atoms/Button/ContainedButton'
import { SubscribeForm, SubscribeFormRow } from './StyledBrandsRank'

const { inputRequired, invalidEmail } = locale.forms.errors

export const BrandsRankSubscribeModal = ({
    visible,
    onCancel,
    handleSubmit,
    values,
    touched,
    errors,
    handleChange
}) => (
    <StandardModal visible={visible} onCancel={onCancel}>
        <SubscribeForm onSubmit={handleSubmit}>
            <SubscribeFormRow>
                <Heading level={3} uppercase bold>
          Track Weekly Change Of All Brands
                </Heading>
            </SubscribeFormRow>
            <SubscribeFormRow>
                <Text>
          We will email you a weekly update on all brands social following.
                </Text>
            </SubscribeFormRow>
            <SubscribeFormRow>
                <Input
                    placeholder='Email address'
                    id='email'
                    name='email'
                    type='email'
                    error={touched.email && errors.email}
                    value={values.email}
                    onChange={handleChange}
                    hideLabel
                />
            </SubscribeFormRow>
            <ContainedButton fullWidth size='large' type='submit'>
        Send Me Updates
            </ContainedButton>
        </SubscribeForm>
    </StandardModal>
)

const formPropType = PropTypes.shape({
    email: PropTypes.string
})

BrandsRankSubscribeModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: formPropType.isRequired,
    errors: formPropType.isRequired,
    touched: PropTypes.shape({
        email: PropTypes.bool
    }).isRequired
}

const SubscribeComponent = withFormik({
    mapPropsToValues: () => ({ email: '' }),
    validate: ({ email }) => {
        const errors = {}
        if (!email) {
            errors.email = inputRequired
        } else if (!testEmail(email)) {
            errors.email = invalidEmail
        }
        return errors
    },
    handleSubmit: ({ email }, { props }) => {
        props.onSubmit(email)
    }
})(BrandsRankSubscribeModal)

export default SubscribeComponent
