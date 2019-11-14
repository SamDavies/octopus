import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { locationPropTypes } from '../../config/prop-types'

class ScrollRestore extends Component {
    componentDidUpdate (prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render () {
        return this.props.children
    }
}

ScrollRestore.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    location: locationPropTypes.isRequired
}

export default withRouter(ScrollRestore)
