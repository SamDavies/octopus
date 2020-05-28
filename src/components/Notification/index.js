import PropTypes from 'prop-types'
import React from 'react'
import { IoMdCheckmark, IoIosClose } from 'react-icons/io'
import { FaExclamation } from 'react-icons/fa'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Text from '../Text'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.black};
    padding: 5px 25px;
    max-width: 400px;
    min-height: 50px;
`

const StyledContext = styled.div`
    margin-left: 20px;
`

const StyledIcon = `
    font-size: 20px;
    padding: 5px;
    height: 30px;
    width: 30px;
    border-radius: 30px;
`

const StyledSuccess = styled(IoMdCheckmark)`
    ${StyledIcon}
    color: ${colors.black};
    background-color: ${colors.kiwi};
`

const StyledWarning = styled(FaExclamation)`
    ${StyledIcon}
    color: ${colors.black};
    background-color: ${colors.lemon};
`

const StyledError = styled(IoIosClose)`
    ${StyledIcon}
    color: ${colors.white};
    background-color: ${colors.scarlet};
`

const Notification = (props) =>
    <StyledContainer>
        {props.type === 'success' && <StyledSuccess />}
        {props.type === 'warning' && <StyledWarning />}
        {props.type === 'error' && <StyledError />}
        <StyledContext>
            <Text
                color={colors.white}
            >
                {props.text}
            </Text>
        </StyledContext>
    </StyledContainer>

Notification.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default Notification
