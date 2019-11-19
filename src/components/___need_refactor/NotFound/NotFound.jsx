import React from 'react'
import Heading from '../ui/atomic/atoms/Heading'
import Text from '../ui/atomic/atoms/Text'
import HeadTitle from '../HeadTitle'
import { Container, ContentSection } from './StyledNotFound'

const NotFound = () => (
    <Container>
        <HeadTitle title='Error 404' />
        <Heading level={4} bold>
      ERROR - 404
        </Heading>
        <ContentSection>
            <Text textAlign='center' size='large'>
        We could‘t find the page you‘re looking for...
            </Text>
        </ContentSection>
    </Container>
)

export default NotFound
