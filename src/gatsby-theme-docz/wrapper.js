import PropTypes from 'prop-types'
import '../../../public/fonts.css'
import '../../../public/styles.css'

const Wrapper = (props) =>
    props.children

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
}

export default Wrapper
