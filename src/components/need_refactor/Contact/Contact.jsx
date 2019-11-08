import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import HeadTitle from '../HeadTitle'
import Button from '../ui/atomic/atoms/Button/DefaultButton'
import Heading from '../ui/atomic/atoms/Heading'
import Input from '../ui/atomic/atoms/Input'
import Textarea from '../ui/atomic/atoms/Textarea'
import StaticModalLayout from '../ui/StaticModalLayout'
import { EMAIL_SUBJECTS } from '../../config/messaging'
import { ButtonHolder, Content, FormContainer, FormContent, InputHolder } from './StyledContact'

export const ContactComponent = props => (
    <StaticModalLayout>
        <HeadTitle title='Contact Us' />
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            onSubmit={(values, { resetForm }) => {
                const { email, name, message } = values
                props.contactSend({
                    from: email,
                    message: `${name} (${email}): ${message}`,
                    subject: EMAIL_SUBJECTS.general
                })
                resetForm({})
            }}
            render={({ values, errors, touched, handleChange, handleSubmit }) => (
                <FormContainer onSubmit={handleSubmit}>
                    <Content>
                        <Heading level={4} uppercase bold>
                            Contact
                        </Heading>
                        <FormContent>
                            <InputHolder>
                                <Input
                                    name='name'
                                    placeholder='Name'
                                    error={touched.name && errors.name}
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            </InputHolder>
                            <InputHolder>
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    error={touched.email && errors.email}
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </InputHolder>
                            <Textarea
                                name='message'
                                id='message'
                                placeholder='message'
                                error={touched.message && errors.message}
                                value={values.message}
                                onChange={handleChange}
                            />
                        </FormContent>
                        <ButtonHolder>
                            <Button size='large' type='submit'>
                                Send
                            </Button>
                        </ButtonHolder>
                    </Content>
                </FormContainer>
            )}
        />
    </StaticModalLayout>
)

ContactComponent.propTypes = {
    contactSend: PropTypes.func.isRequired
}

export default ContactComponent
