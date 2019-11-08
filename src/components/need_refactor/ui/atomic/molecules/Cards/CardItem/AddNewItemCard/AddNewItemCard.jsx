import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../../../../../styles/global-styles'
import AddIcon from '../../../../atoms/Icons/AddIcon'
import {
    StyledAddNewItem,
    StyledIconHolder,
    StyledIcon
} from './StyledComponents'

const AddNewItemCard = props => (
    <StyledAddNewItem to={props.link}>
        <StyledIconHolder>
            <StyledIcon>
                <AddIcon color={colors.white} />
            </StyledIcon>
        </StyledIconHolder>
    </StyledAddNewItem>
)

AddNewItemCard.propTypes = {
    link: PropTypes.string.isRequired
}

export default AddNewItemCard
