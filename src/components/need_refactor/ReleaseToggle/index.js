import PropTypes from 'prop-types'
import includes from 'lodash/includes'
import getConfig from '../../config'

const ReleaseToggle = props => {
    if (includes(props.exclude, getConfig().DEPLOYMENT)) {
        return null
    }

    return props.children
}

ReleaseToggle.propTypes = {
    exclude: PropTypes.array.isRequired
}

export default ReleaseToggle
