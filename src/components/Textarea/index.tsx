import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import AbstractText from '../AbstractText'
import ErrorMessage from '../ErrorMessage'
import Text from '../Text'
import Fonts from "../../constants/fonts";
import {MediaQuery} from "../../constants/sizes";

const TextareaContainer = styled.div`
  display: block;
`

type StyledTextareaProps = {
    error: boolean,
    font?: Fonts,
    spacing: 'normal'
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
    onChange: (e: string) => void;
    placeholder: string;
    maxLength?: number | undefined,
    id: string,
    name: string,
    error: string,
    disabled: boolean
}

const Textarea: React.FC<Props> = (props: Props) => (
    <TextareaContainer>
        <StyledTextarea
            font={Fonts.serif}
            spacing='normal'
            id={props.id}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => props.onChange(e.target.value)}
            error={!!props.error && !props.disabled}
        />
        {props.error && !props.disabled && <ErrorMessage>
            {props.error}
        </ErrorMessage>}
        {props.maxLength && (
            <Remaining>
                <Text size='small'>
                    {props.maxLength - props.value.length} characters remaining
                </Text>
            </Remaining>
        )}
    </TextareaContainer>
)

Textarea.defaultProps = {
    placeholder: '',
    value: '',
    error: '',
    disabled: false
}

export default Textarea
