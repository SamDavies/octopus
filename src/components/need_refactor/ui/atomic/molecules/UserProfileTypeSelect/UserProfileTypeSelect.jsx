import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Select from '../../../../components/ui/atomic/molecules/Select'

import StyledSelectWrapper from './StyledUserProfileTypeSelect'

class UserProfileTypeSelect extends PureComponent {
  handleChange = option => {
      const { propToChange, onChange } = this.props
      onChange(propToChange, option.value)
  };

  render () {
      const { value, options, placeholder, error } = this.props
      return (
          <StyledSelectWrapper>
              <Select
                  error={error}
                  value={value}
                  placeholder={placeholder}
                  options={options}
                  onChange={this.handleChange}
                  withErrorMessage={error && error.length > 0}
              />
          </StyledSelectWrapper>
      )
  }
}

UserProfileTypeSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    propToChange: PropTypes.string.isRequired,
    error: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ).isRequired
}

UserProfileTypeSelect.defaultProps = {
    error: null
}

export default UserProfileTypeSelect
