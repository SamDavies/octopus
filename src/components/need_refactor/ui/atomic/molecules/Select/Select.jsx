import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import ReactSelect, { components } from 'react-select'
// import Icon from '../../../../../components/ui/Icon'
import { selectValuePropType } from '../../../../../config/prop-types'
import ErrorMessage from '../../atoms/ErrorMessage'
import { Container, EmptyOption, customStyles } from './StyledSelect'
import { ReactComponent as DropdownArrow } from '../../../../../static/images/new-design/icons/icon_arrowdrop.svg'

class Select extends Component {
    renderContainer = props => {
        const { withErrorMessage } = this.props
        return (
            <Container withErrorMessage={withErrorMessage} {...props} className='select-container'>
                {props.children}
            </Container>
        )
    };

    renderEmptyOption = () => {
        const { noOptionsMessage } = this.props
        return <EmptyOption>{noOptionsMessage}</EmptyOption>
    };

    renderIcon = () => (
        <DropdownArrow />
    );

    renderOption = props => (
        <components.Option
            {...props}
            innerProps={{ ...props.innerProps, id: props.data.id || '' }}
            className={props.selectProps.instanceId}
        />
    );

    render () {
        const {
            disabled,
            searchable,
            placeholder,
            options,
            value,
            onChange,
            name,
            error,
            onInputChange,
            filterOptions,
            inputValue,
            defaultValue,
            autoFocus,
            onBlur,
            ref,
            className,
            classNamePrefix,
            instanceId,
            hasMargin,
            height
        } = this.props
        return (
            <Fragment>
                <ReactSelect
                    hasMargin={hasMargin}
                    height={height}
                    styles={customStyles}
                    isDisabled={disabled}
                    isSearchable={searchable}
                    value={options.find(el => el.value === value)}
                    components={{
                        SelectContainer: this.renderContainer,
                        NoOptionsMessage: this.renderEmptyOption,
                        IndicatorsContainer: this.renderIcon,
                        Option: this.renderOption
                    }}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    name={name}
                    id={name}
                    instanceId={instanceId}
                    isClearable={false}
                    backspaceRemovesValue={false}
                    placeholder={placeholder}
                    selectOption={() => console.log('select')}
                    options={options}
                    filterOption={filterOptions}
                    inputValue={inputValue}
                    defaultValue={defaultValue}
                    autoFocus={autoFocus}
                    onBlur={onBlur}
                    escapeClearsValue={false}
                    ref={ref}
                    classNamePrefix={classNamePrefix}
                    className={className}
                />
                {error && !disabled && <ErrorMessage>{error}</ErrorMessage>}
            </Fragment>
        )
    }
}
Select.propTypes = {
    /** Is select disabled */
    disabled: PropTypes.bool,
    /** Error message */
    error: PropTypes.string,
    /** Has an error message at bottom */
    withErrorMessage: PropTypes.bool,
    /** Select placeholder text */
    placeholder: PropTypes.string,
    /** Select options */
    options: PropTypes.arrayOf(selectValuePropType),
    /** Selected option value */
    value: selectValuePropType,
    /** option select callback */
    onChange: PropTypes.func,
    /** input change callback */
    onInputChange: PropTypes.func,
    /** select name */
    name: PropTypes.string,
    /** is select searchable  */
    searchable: PropTypes.bool,
    /** no options message */
    noOptionsMessage: PropTypes.string,
    /** function for filter option */
    filterOptions: PropTypes.func,
    // input value
    inputValue: selectValuePropType,
    // autofocus the component on mount
    autoFocus: PropTypes.bool,
    // onBlur callback
    onBlur: PropTypes.func,
    // create ref callback
    ref: PropTypes.func,
    // Is select contain styles for search /
    isSearch: PropTypes.bool,
    // add bottom gutter to container
    gutterBottom: PropTypes.bool,
    // add instanceid to container
    instanceId: PropTypes.string,
    // add class name prefix to react select elements
    classNamePrefix: PropTypes.string,
    // Default value
    defaultValue: PropTypes.object,
    // Whether container has a top margin
    hasMargin: PropTypes.bool,
    // Whether control has height
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string
}

Select.defaultProps = {
    inputValue: '',
    name: '',
    error: '',
    placeholder: '',
    value: '',
    disabled: false,
    autoFocus: false,
    searchable: false,
    withErrorMessage: false,
    options: [],
    onChange: () => { },
    onInputChange: () => { },
    onBlur: () => { },
    noOptionsMessage: '',
    // return all options by default
    filterOptions: options => options,
    ref: () => { },
    isSearch: false,
    gutterBottom: true,
    classNamePrefix: 'react-select',
    instanceId: '',
    defaultValue: null,
    hasMargin: true,
    height: 40
}

export default Select
