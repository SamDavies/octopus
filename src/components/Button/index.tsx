import styled from 'styled-components'
import Color from '../../constants/colors'

const buttonColors: {
    black: string;
    salmon: string;
    red: string;
    grey: string;
} = {
    black: Color.black,
    salmon: Color.salmon,
    red: Color.scarlet,
    grey: Color.scarlet
}

type Props = {
    color?: 'black' | 'salmon' | 'red' | 'grey';
    kind?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
}

const getStyles = (props: Props): string => {
    const primaryColor: string = props.color ? buttonColors[props.color] : Color.black

    if (props.kind === 'secondary') {
        return `
            background-color: ${Color.white};
            color: ${primaryColor};
            border: 2px solid ${primaryColor};

            &:hover {
                opacity: 0.8;
            }
        `
    }

    if (props.kind === 'ghost') {
        return `
            color: ${primaryColor};
            background-color: transparent;
            border-color: transparent;

            &:hover {
                opacity: 0.8;
            }
        `
    }

    return `
        color: ${Color.white};
        background-color: ${primaryColor};
        border: 2px solid ${primaryColor};

        &:hover {
            opacity: 0.8;
        }
    `
}

const Button = styled.button<Props>`
    ${(props): string | null => props.fullWidth ? `
        width: 100%;
    ` : null};

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
    ` : null}

    ${(props): string | null => props.size === 'medium' ? `
        min-width: auto;
        height: 32px;
        line-height: 14px;
        font-size: 14px;
        font-weight: 600;
    ` : null}

    ${(props): string => getStyles(props)}

    ${(props): string | null => props.disabled ? `
        color: ${Color.grey5};
        background-color: ${Color.white};
        border-color: ${Color.grey7};
        cursor: not-allowed;

        &:hover {
            opacity: 1;
        }
    ` : null}

    ${(props): string | null => props.loading ? `
        background: ${Color.grey9};
        border-color: ${Color.grey7};
        color: ${Color.grey5};
        cursor: default;
        pointer-events: none;
        filter: grayscale(1);
    ` : null}
`

Button.defaultProps = {
    kind: 'primary',
    color: 'black',
    size: 'large',
    disabled: false,
    loading: false,
    fullWidth: false
}

export default Button
