import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    StyledAccordionItem,
    AngleIcon,
    Title,
    Body
} from './StyledAccordionItem'

class AccordionItem extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            isOpened: props.isOpened
        }
    }
    render () {
        const { title, children, lastItem } = this.props
        const { isOpened } = this.state
        return (
            <StyledAccordionItem tabIndex='-1' isLast={lastItem} isOpened={isOpened}>
                <AngleIcon />
                <Title onClick={() => this.setState({ isOpened: !isOpened })}>
                    {title}
                </Title>
                <Body>{children}</Body>
            </StyledAccordionItem>
        )
    }
}

AccordionItem.propTypes = {
    /** Item title */
    title: PropTypes.string.isRequired,
    /** Children  node */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** Define styles for last item in set */
    lastItem: PropTypes.bool,
    /** Is Item open */
    isOpened: PropTypes.bool
}

AccordionItem.defaultProps = {
    lastItem: false,
    isOpened: false
}

export default AccordionItem
