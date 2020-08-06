import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import AbstractText from '../AbstractText'
import ErrorMessage from '../ErrorMessage'
import Text from '../Text'
import Font from '../../constants/fonts'
import noop from 'lodash/noop'
import { MediaQuery } from '../../constants/sizes'

const TextareaContainer = styled.div`
  display: block;
`

type StyledTextareaProps = {
    error: boolean;
    font?: Font;
    spacing: 'normal';
}

const StyledTextarea = styled.textarea<StyledTextareaProps>`
    ${AbstractText};
    font-size: 16px;
    width: 100%;
    min-height: 100px;
    padding: 20px;
    border: 2px solid;
    ${(props: StyledTextareaProps): string => `
        border-color: ${props.error ? colors.scarlet : colors.black};
    `};
    color: ${colors.black};
    background-color: ${colors.white};
    resize: none;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    transition: all 0.15s ease-in;
    @media ${MediaQuery.tablet} {
        height: 120px
    }
    &::placeholder {
        color: ${colors.lightGray};
    }
    &:focus {
        border-color: ${colors.lightSalmon};
        outline: none;
    }
    &:disabled {
        color: ${colors.cloud};
        border-color: ${colors.cloud};
    }
`

const Remaining = styled.div`
    display: flex;
    align-items: center;
`

type Props = {
    value: string;
    onChange?: (e: string) => void;
    placeholder: string;
    maxLength?: number;
    id?: string;
    name?: string;
    error?: string;
    disabled?: boolean;
}

const Textarea: React.FC<Props> = (
    {
        id,
        name,
        onChange = noop,
        placeholder = '',
        value = '',
        error = '',
        disabled = false,
        maxLength
    }: Props
) => (
    <TextareaContainer>
        <StyledTextarea
            font={Font.serif}
            spacing='normal'
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => onChange(e.target.value)}
            error={!!error && !disabled}
        />
        {error && !disabled && <ErrorMessage>
            {error}
        </ErrorMessage>}
        {maxLength && (
            <Remaining>
                <Text size='small'>
                    {maxLength - value.length} characters remaining
                </Text>
            </Remaining>
        )}
    </TextareaContainer>
)

export default Textarea
