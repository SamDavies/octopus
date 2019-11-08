import React from 'react'
import { ChildNodesPropType } from '../../../../../../config/prop-types'
import StyledCardList from './StyledCardList'

const CardList = ({ children }) => <StyledCardList>{children}</StyledCardList>

CardList.propTypes = {
    children: ChildNodesPropType
}

CardList.defaultProps = {
    children: null
}

export default CardList
