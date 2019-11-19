import styled from 'styled-components'
import { components } from 'react-select'
import { colors } from '../../../../../styles/global-styles'

export const Container = styled(components.SelectContainer)`
   position: relative;
   border-bottom-style: ${({ isDisabled }) => (isDisabled ? 'dotted' : 'solid')};
   border-bottom-color: ${({ withErrorMessage }) => (withErrorMessage ? `${colors.brightRed}` : `${colors.black}`)};
   border-bottom-width: 2px;
   box-shadow: ${({ isFocused }) => (isFocused ? `0 0 0 3px ${colors.aqua}` : 'none')};
   transition: all 0.3s ease-in;
   margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '16px' : 0)};
   margin-top: ${({ selectProps }) => (selectProps.hasMargin ? '9px' : '0px')};

   ${({ fullBorder }) => fullBorder && `
        border: 3px solid ${colors.black};
   `}

    &:focus {
      border: none,
      box-shadow: none,
    }
`

export const EmptyOption = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.85;
  letter-spacing: 2px;
  text-transform: uppercase;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  padding: 8px;
`

export const customStyles = {
    valueContainer: () => ({
        '& div': {
            width: '100%',
            textAlign: 'left',
            paddingLeft: '8px'
        },
        '& input': {
            // fix for dummy input
            width: '100%',
            paddingLeft: '8px'
        }
    }),
    option: (base, state) => ({
        ...base,
        position: 'relative',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: 1,
        letterSpacing: '0.66px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease-in',
        boxSizing: 'border-box',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        backgroundColor: state.isFocused ? `${colors.black}` : 'transparent',
        color: state.isFocused ? `${colors.white}` : `${colors.black}`,
        zIndex: 10
    }),
    control: (base, state) => ({
        display: 'flex',
        alignItems: 'center',
        height: `${state.selectProps.height}px`,
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        backgroundColor: `${colors.white}`,
        lineHeight: 1.85,
        letterSpacing: '2px',
        borderBottom: `2px solid ${colors.black}`,
        borderRadius: 0,
        fontWeight: 'bold',
        border: 'none',
        fontSize: '12px',
        margin: '0px'
    }),
    placeholder: (base, state) => ({
        ...base,
        fontSize: '12px',
        textDecoration: state.isDisabled ? 'line-through' : 'unset',
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: 'bold',
        position: 'absolute',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textAlign: 'left',
        width: '100%',
        paddingLeft: '8px',
        paddingRight: '25px',
        lineHeight: 1
    }),
    input: () => ({
        color: `${colors.black}`,
        paddingLeft: '10px',
        width: '100%',
        textAlign: 'center',
        '> div': {
            width: '100%'
        },
        '& input': {
            margin: 0,
            width: '100%'
        }
    }),
    singleValue: base => ({
        ...base,
        color: `${colors.black}`
    }),
    groupHeading: base => ({
        ...base,
        fontSize: '12px',
        paddingLeft: '20px',
        fontWeight: 'bold',
        lineHeight: 1.85,
        textTransform: 'uppercase'
    }),
    menu: base => ({
        ...base,
        position: 'absolute',
        border: 'none',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
        zIndex: 8
    }),
    menuList: base => ({
        ...base,
        padding: 0,
        borderRadius: 0
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    indicatorContainer: base => ({
        ...base,
        padding: 0
    })
}
