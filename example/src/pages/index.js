import { Box, Button, MediaQuery, Heading, Text } from '@stylindex/octopus'
import React from 'react'
import styled from 'styled-components'
import FormExample from '../components/FormExample'
import ModalExample from '../components/ModalExample'
import TabExample from '../components/NavigationExample'
import OtherExample from '../components/OtherExample'
import TableExample from '../components/TableExample'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;

    @media ${MediaQuery.tablet} {
        margin: 40px;
    }
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${MediaQuery.tablet} {
        margin-right: 20px;
    }

    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-right: 20px;
`

const StyledGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media ${MediaQuery.tablet} {
        flex-direction: row;
    }
`

const Page = () =>
    <StyledContainer>
        <Heading level={1} uppercase spacing='wide'>
            Octopus
        </Heading>
        <Heading level={2}>
            The Stylindex Style Guide
        </Heading>
        <StyledSection>
            <Heading level={3}>
                Buttons
            </Heading>
            <Box>
                <StyledGroup>
                    <StyledSpacing>
                        <Button kind='primary'>
                            Primary
                        </Button>
                        <Button kind='secondary'>
                            Secondary
                        </Button>
                        <Button kind='ghost'>
                            Ghost
                        </Button>
                    </StyledSpacing>
                    <StyledSpacing>
                        <Button color='black'>
                            Black
                        </Button>
                        <Button color='red'>
                            Red
                        </Button>
                        <Button color='salmon'>
                            Salmon
                        </Button>
                        <Button color='grey'>
                            Grey
                        </Button>
                    </StyledSpacing>
                    <StyledSpacing>
                        <Button size='large'>
                            Large
                        </Button>
                        <Button size='medium'>
                            Medium
                        </Button>
                        <Button size='small'>
                            Small
                        </Button>
                    </StyledSpacing>
                </StyledGroup>
            </Box>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Headings
            </Heading>
            <Box>
                <StyledGroup>
                    <StyledColumn>
                        <Heading level={1}>
                            Heading 1
                        </Heading>
                        <Heading level={2}>
                            Heading 2
                        </Heading>
                        <Heading level={3}>
                            Heading 3
                        </Heading>
                        <Heading level={4}>
                            Heading 4
                        </Heading>
                        <Text>
                            Normal Text
                        </Text>
                        <Text size='small'>
                            Small Text
                        </Text>
                    </StyledColumn>
                    <StyledColumn>
                        <Heading level={1} font='literata'>
                            Serif 1
                        </Heading>
                        <Heading level={2} font='literata'>
                            Serif 2
                        </Heading>
                        <Heading level={3} font='literata'>
                            Serif 3
                        </Heading>
                        <Heading level={4} font='literata'>
                            Serif 4
                        </Heading>
                        <Text font='literata'>
                            Serif 5
                        </Text>
                        <Text size='small' font='literata'>
                            Serif 6
                        </Text>
                    </StyledColumn>
                    <StyledColumn>
                        <Heading level={1} uppercase>
                            Normal
                        </Heading>
                        <Heading level={1} spacing='wide' uppercase>
                            Wide
                        </Heading>
                    </StyledColumn>
                </StyledGroup>
            </Box>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Tables
            </Heading>
            <Box>
                <TableExample/>
            </Box>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Forms
            </Heading>
            <Box>
                <FormExample/>
            </Box>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Modal
            </Heading>
            <Box>
                <ModalExample/>
            </Box>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Tabs
            </Heading>
            <Box>
                <TabExample/>
            </Box>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Other
            </Heading>
            <Box>
                <OtherExample/>
            </Box>
        </StyledSection>
    </StyledContainer>

export default Page
