import React from 'react'
import HeadTitle from '../HeadTitle'
import AccordionItem from '../ui/atomic/atoms/AccordionItem'
import { Link } from 'react-router-dom'
import {
    StyledAbout,
    StyledAboutWindow,
    StyledAboutSection,
    StyledFaqList,
    StyledAboutHeading,
    StyledAboutText,
    StyledAboutLink
} from './StyledAbout'

const About = () => (
    <StyledAbout>
        <HeadTitle title='About Us' />
        <StyledAboutWindow>
            <StyledAboutSection>
                <StyledAboutHeading level={4} uppercase='true' bold='true'>
          About
                </StyledAboutHeading>
                <StyledAboutText size='large' textAlign='center'>
                Stylindex is a database of resources for photoshoot, video, and event production.
                </StyledAboutText>
                <StyledAboutText size='large' textAlign='center'>
                We host portfolios from all of the best global talent and production companies, updated in
                real time with the latest work &amp; contact details.
                </StyledAboutText>
                <StyledAboutText size='large' textAlign='center'>
                We work with top brands, magazines, and producers globally to build the
                best freelance creative teams.
                </StyledAboutText>
                <StyledAboutText size='large' textAlign='center'>
                BLACKBOOK allows production teams to privately manage their freelance rosters,
                and keep visual records of all past, present and future projects.
                </StyledAboutText>
                <StyledAboutText size='large' textAlign='center'>
                To learn more, sign up {' '}
                    <Link
                        to={{
                            pathname: '/account/create',
                            // this is the trick!
                            state: { modal: true }
                        }}>
                        <StyledAboutLink>here</StyledAboutLink>
                    </Link>
                </StyledAboutText>
            </StyledAboutSection>
            <StyledAboutHeading level={4} uppercase='true' bold='true'>
        Membership + Faq
            </StyledAboutHeading>
            <StyledFaqList>
                <AccordionItem title='What does Stylindex do?'>
                    <StyledAboutText size='normal'>
                    Stylindex helps content producers find the best creative talent and production resources for photoshoots, videos, and events.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem
                    title='WHAT IS BLACKBOOK MEMBERSHIP?'
                >
                    <StyledAboutText size='normal'>
                    Blackbook allows companies producing content to privately
                    manage their rosters of talent and production resources
                    through their own private portal.  Here they can store
                    talent lists, record ratings, keep pricing information, and
                    attach talent hired to specific jobs.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='WHAT PROBLEM DOES BLACKBOOK SOLVE?'>
                    <StyledAboutText size='normal'>
                    Have you ever asked, “What stylist did we use for that job?
                    How much did we pay them?  Were they easy to work with?”
                    Finding the answers to those questions often requires going through
                    old emails, tracking down excel sheets, finding that folder on a desktop,
                    asking a team member who was on set, and bothering someone in accounting.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                    With Blackbook all of your freelance hiring records are stored in one
                    place for your company’s posterity, which means your team has all of
                    the information they need to hire for the future.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                    And once your team is using Blackbook, you can feel free to plan that
                    well-deserved vacation, turn off your phone, and enjoy a giant piña colada.
                    Or four.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                        Sound good? Sign up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>
                        </Link>
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='HOW MUCH IS BLACKBOOK MEMBERSHIP?'>
                    <StyledAboutText size='normal'>
                    Blackbook pricing depends on the size of the business,
                    type of business, and locations of use.
                    </StyledAboutText>
                    <StyledAboutText size='normal'>
                    To find out your pricing, sign up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>
                        </Link>
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='IS STYLINDEX REPLACING AGENCIES?'>
                    <StyledAboutText size='normal'>
                    Nope.  We come from backgrounds with experience producing shoots,
                    running brands, and working as talent on set, so we understand the
                    realities of shoot production and the need for agency support.
                    </StyledAboutText>
                    <StyledAboutText size='normal'>
                    Our aim is to help everyone streamline their business so they can
                    focus on what they do best:  MAKING BEAUTIFUL WORK.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='DOES STYLINDEX TAKE COMMISSION?'>
                    <StyledAboutText size='normal'>
                    Nope. We’re not that type of site. We think it’s a bit sign up {' '}
                        <StyledAboutLink><a href='https://www.urbandictionary.com/define.php?term=naff' target='_blank' rel='noopener noreferrer'>naff</a></StyledAboutLink>.
                    </StyledAboutText>
                </AccordionItem>
                <AccordionItem title='HOW DOES STYLINDEX MAKE MONEY?'>
                    <StyledAboutText size='normal'>
                    We make our money from Blackbook subscriptions.
                    </StyledAboutText>
                    <StyledAboutText size='normal'>
                    Stylindex does not get involved in our talent’s payments, and does not take a commission.
                    </StyledAboutText>
                </AccordionItem>
                <AccordionItem title='HOW CAN I HAVE A PAGE ON STYLINDEX?'>
                    <StyledAboutText size='normal'>
                        <strong>Agency Creative Talent</strong> can ask their agency to apply to Stylindex by signing up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>.
                        </Link>
                        {' '}It’s free for agencies as long as accepted.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                        <strong>Independent Creative Talent</strong> without representation can apply by signing up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>.
                        </Link>
                        {' '}We only accept talent with truly commercial work, but will make exceptions for assistants
                    and up-and-coming talent with insanely cool portfolios.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                        <strong>Models</strong> can ask their agency to apply to Stylindex by signing up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>.
                        </Link>
                        {' '}It’s free for agencies as long as accepted. We only accept models with agency representation.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                        <strong>Production Companies &amp; Resources</strong> can apply by signing up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>.
                        </Link>
                        {' '}We only work with the best photo, video, and event resources globally.
                    </StyledAboutText>

                </AccordionItem>
                <AccordionItem title='HOW MUCH DOES IT COST TO BE LISTED ONCE ACCEPTED?'>
                    <StyledAboutText size='normal'>
                    Once accepted, Basic Membership is free.  Premium Membership will launch soon - enquire {' '}
                        <StyledAboutLink><a href='mailto:premium@stylindex.com'>here</a></StyledAboutLink> to be
                    added to Premium waitlist.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='WHO CAN SEE MY CONTACT DETAILS?'>
                    <StyledAboutText size='normal'>
                    Only Blackbook Members can see contact details.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                    Blackbook Members have access to fully up-to-date, precise contact details so
                    they never need to email an info@address again.
                    </StyledAboutText>

                    <StyledAboutText size='normal'>
                    To find out more about Blackbook Membership, sign up {' '}
                        <Link
                            to={{
                                pathname: '/account/create',
                                // this is the trick!
                                state: { modal: true }
                            }}>
                            <StyledAboutLink>here</StyledAboutLink>.
                        </Link>
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='HOW DOES STYLINDEX ENSURE THAT ALL WORK DISPLAYED ON THE SITE IS UP TO DATE?'>
                    <StyledAboutText size='normal'>
                    We use automated technology to update agency talent portfolios in real time, so you always see their latest work.
                    </StyledAboutText>
                    <StyledAboutText size='normal'>
                    Production resources &amp; independent talent portfolios are updated by our team, and we recommend sending us new work on a weekly basis.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='HOW WILL I GET PAID AFTER BOOKING A JOB?'>
                    <StyledAboutText size='normal'>
                    We do not process payments, so your payment-methods will stay the same.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='WHO IS BEHIND STYLINDEX?'>
                    <StyledAboutText size='normal'>
                    We are an exceedingly fabulous, exceptionally wonderful team of ridiculously good looking people from all over the world,
                    based in Los Angeles, New York, London, and Tokyo.
                    </StyledAboutText>
                </AccordionItem>

                <AccordionItem title='Are you hiring?' lastItem>
                    <StyledAboutText size='normal'>
            Are you exceedingly fabulous, exceptionally wonderful, and ridiculously good looking?
            Then yes. See job listings{' '}
                        <a
                            href='https://angel.co/stylindex/jobs'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <StyledAboutLink>here</StyledAboutLink>
                        </a>.
                    </StyledAboutText>
                </AccordionItem>
            </StyledFaqList>
        </StyledAboutWindow>
    </StyledAbout>
)

export default About
