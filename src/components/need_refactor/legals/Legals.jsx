import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { locationPropTypes } from '../../config/prop-types'
import termsContent from '../../static/content/terms.md'
import privacyContent from '../../static/content/privacy.md'
import HeadTitle from '../HeadTitle'
import MarkdownComponent from '../ui/atomic/molecules/MarkdownComponent'
import { Container, ModalContent } from './StyledLegals'

const Legals = ({ history: { location } }) => {
    const isTerms = location.pathname.includes('terms')
    const [privacy, setPrivacy] = useState('')
    const [terms, setTerms] = useState('')

    useEffect(() => {
        fetch(privacyContent)
            .then(response => {
                return response.text()
            }).then(text => {
                setPrivacy(text)
            })

        fetch(termsContent)
            .then(response => {
                return response.text()
            }).then(text => {
                setTerms(text)
            })
    }, [])

    return (
        <Container>
            <HeadTitle title='Privacy Policy' />
            <ModalContent>
                <MarkdownComponent content={isTerms ? terms : privacy} />
            </ModalContent>
        </Container>
    )
}

Legals.propTypes = {
    history: PropTypes.shape({
        location: locationPropTypes
    }).isRequired
}

export default Legals
