import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../atomic/atoms/Heading'
import {
    StyledContactRecords,
    StyledContactRecord,
    StyledContactRecordHeader,
    StyledContactRecordContent,
    StyledContactRecordDepartment,
    StyledContactItem,
    StyledLink
} from './StyledContactRecords'

const ContactRecords = ({ records }) => (
    <StyledContactRecords>
        {records && records.map(record => (
            <StyledContactRecord key={record.name}>
                <StyledContactRecordHeader>
                    <Heading level={3} uppercase bold>
                        {record.name}
                    </Heading>
                </StyledContactRecordHeader>
                <StyledContactRecordContent>
                    {record.departments && record.departments.map(department => {
                        const {
                            name,
                            // eslint-disable-next-line
                            job_role,
                            address,
                            phone,
                            fax,
                            email,
                            website
                        } = department

                        const wsDisplay = website ? website.replace(/^https?:\/\//i, '') : ''

                        return (
                            <StyledContactRecordDepartment key={`${record.name}-${name}`}>
                                <Heading level={5} uppercase bold>
                                    {name}
                                </Heading>
                                {/* eslint-disable-next-line */}
                                {job_role ? (<StyledContactItem>{job_role}</StyledContactItem>) : null}

                                {address ? address.split(',').map(line => (
                                    <StyledContactItem key={line}>{line}</StyledContactItem>
                                )) : null}

                                {phone ? (<StyledContactItem>
                                    <StyledLink
                                        id='contact-detail-item--phone'
                                        href={`tel:${phone}`}
                                    >
                                        {phone}
                                    </StyledLink>
                                </StyledContactItem>) : null}

                                {fax ? (<StyledContactItem>{fax}</StyledContactItem>) : null}

                                {email ? (
                                    <StyledContactItem>
                                        <StyledLink
                                            id='contact-detail-item--email'
                                            href={`mailto:${email}`}
                                        >
                                            {email}
                                        </StyledLink>
                                    </StyledContactItem>
                                ) : null}

                                {wsDisplay ? (
                                    <StyledContactItem>
                                        <StyledLink
                                            id='contact-detail-item--website'
                                            href={`//${wsDisplay}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {wsDisplay}
                                        </StyledLink>
                                    </StyledContactItem>
                                ) : null}

                            </StyledContactRecordDepartment>
                        )
                    })}
                </StyledContactRecordContent>
            </StyledContactRecord>
        ))}
    </StyledContactRecords>
)

ContactRecords.propTypes = {
    /** Array of records */
    records: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

export default ContactRecords
