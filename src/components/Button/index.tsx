import styled from 'styled-components'
import Colors from '../../constants/colors'

type Props = {
    color: Colors.black | Colors.salmon | Colors.scarlet | Colors.grey1
    kind: 'primary' | 'secondary' | 'ghost'
    size: 'small' | 'medium' | 'large'
    disabled: boolean
    loading: boolean
    fullWidth: boolean
}

const getStyles = (props: Props): string => {
    if (props.kind === 'secondary') {
        return `
            background-color: ${Colors.white};
            color: ${props.color};
            border: 2px solid ${props.color};

            &:hover {
                opacity: 0.8;
            }
        `
    }

    if (props.kind === 'ghost') {
        return `
            color: ${props.color};
            background-color: transparent;
            border-color: transparent;

            &:hover {
                opacity: 0.8;
            }
        `
    }

    return `
        color: ${Colors.white};
        background-color: ${props.color};
        border: 2px solid ${props.color};

        &:hover {
            opacity: 0.8;
        }
    `
}

const Button = styled.button<Props>`
    ${(props): string | null => props.fullWidth ? `
        width: 100%;
    `: null};

    // font
    text-transform: uppercase;
    line-height: 18px;
    font-size: 18px;
    font-align: center;
    font-weight: 700;

    // default styles
    appearance: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    min-width: 200px;
    height: 36px;
    padding: 0 25px 0 25px;
    flex-shrink: 0;
    margin: 0;
    transition: all 0.2s ease;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;

    ${(props): string | null => props.size === 'small' ? `
        min-width: auto;
        height: 24px;
        line-height: 12px;
        font-size: 12px;
    `: null}

    ${(props): string | null => props.size === 'medium' ? `
        min-width: auto;
        height: 32px;
        line-height: 14px;
        font-size: 14px;
        font-weight: 600;
    `: null}

    ${(props): string => getStyles(props)}

    ${(props): string | null => props.disabled ? `
        color: ${Colors.grey5};
        background-color: ${Colors.white};
        border-color: ${Colors.grey7};
        cursor: not-allowed;

        &:hover {
            opacity: 1;
        }
    `: null}

    ${(props): string | null => props.loading ? `
        background: ${Colors.grey9};
        border-color: ${Colors.grey7};
        color: ${Colors.grey5};
        cursor: default;
        pointer-events: none;
        filter: grayscale(1);
    `: null}
`

Button.defaultProps = {
    kind: 'primary',
    color: Colors.black,
    size: 'large',
    disabled: false,
    loading: false,
    fullWidth: false
}

export default Button
