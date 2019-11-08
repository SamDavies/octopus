import React from 'react'
import { colors } from '../../../../../styles/global-styles'
import Logo from '../Logo'

import { StyledModalHead, StyledLogoContainer } from './StyledModalHeadLogo'

const ModalHeadLogo = () => (
    <StyledModalHead>
        <StyledLogoContainer>
            <Logo color={colors.white} />
        </StyledLogoContainer>
    </StyledModalHead>
)

export default ModalHeadLogo
