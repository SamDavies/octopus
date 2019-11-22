import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { MemoryRouter } from 'react-router-dom'
import BlockContainer from '../components/docs/BlockContainer'
import Input from '../components/Input'
// import CloseButton from '../components/___need_refactor/ui/atomic/atoms/CloseButton'

// const Wrapper = styled.div`
//     // width: 100%;
//     max-width: 500px;
//     font-size: 16px;
//     box-sizing: border-box;
//     padding: 5rem 5px;
//     margin: auto;
//     // height: 550px;
//     background: green;
//     position: relative;
//     display: block;
// `
// const CoolDiv = styled.div`
//     max-height: 300px;
//     height: 100%;
//     background: pink;
//     padding: 20px;
//     max-width: 300px;
//     margin: auto;
//     width: 100%;
//     position: relative;
//     display: block;
//     margin: auto;
// `


const InputContainer = ({exist = '', inputProps = {}}) => {
    const [value, setValue] = useState(exist)
    return (
        <BlockContainer>
            <Input name='foo' value={value} onChange={e => setValue(e.target.value || '')} {...inputProps} />
        </BlockContainer>
    )
}

storiesOf('components/Button', module)

    .add('Normal disalbed2', () => (
        <MemoryRouter>
        <div style={{
            width: '500px'
        }}>
            <InputContainer exist='Entering text' inputProps={{
                placeholder: 'cool',
                name: 'cool',
                label: 'cool'
            }} />
            <InputContainer exist='' inputProps={{
                placeholder: 'With no text',
                name: 'w_nt',
                label: 'With no text'
            }} />
            <InputContainer exist='' inputProps={{
                placeholder: 'disabled',
                name: 'disabled',
                label: 'disabled',
                disabled: true
            }} />
            <InputContainer inputProps={{
                placeholder: 'hide label',
                name: 'hide_label',
                label: 'hide label',
                hideLabel: true
            }} />
            <InputContainer inputProps={{
                placeholder: 'hide label password',
                name: 'l_password',
                label: 'hide label password',
                hideLabel: true,
                type: 'password'
            }} />
            <InputContainer exist='who there' inputProps={{
                placeholder: 'disabled',
                name: 'disabled',
                label: 'disabled',
                disabled: true
            }} />
            <InputContainer exist='erro me' inputProps={{
                placeholder: 'error',
                name: 'error',
                label: 'error',
                error: 'Tthis error'
            }} />
           
            </div>
        </MemoryRouter>
    ))
    .add('Normal 2', () => (
        <MemoryRouter>
            
        </MemoryRouter>
    ))
    .add('Normal disalbed', () => (
        <MemoryRouter>
        </MemoryRouter>
    ))
