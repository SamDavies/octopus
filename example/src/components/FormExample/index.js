import { Checkbox, device, Input, Textarea, Label, PasswordInput, Select } from '@stylindex/octopus'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        margin-right: 20px;
        width: 50%;
    }
    
    & > *:not(:last-child) {
        margin-bottom: 40px;
    }
`

const FormExample = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    const [selectValue, setSelectValue] = useState('')
    const [description, setDescription] = useState('')
    const selectOptions = [1, 2, 3].map(num => ({
        name: String(num),
        id: String(num),
        value: String(num)
    }))

    return <StyledSpacing>
        <div>
            <Label htmlFor='name'>
                Name
            </Label>
            <Input
                id='name'
                name='name'
                value={name}
                placeholder="Choose your name"
                onChange={e => setName(e.target.value)}
            />
        </div>
        <div>
            <Label htmlFor='password'>
                Password
            </Label>
            <PasswordInput
                placeholder="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <Select
            options={selectOptions}
            id='select'
            selectedValue={selectValue}
            resetSelectedValue={() => setSelectValue(null)}
            handleSelectChange={(_, val) => setSelectValue(val)}
            label='select'
        />
        <Checkbox
            id='check3'
            name='check3'
            value='check3'
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            labelText="Some text"
        />
        <Textarea
            placeholder='text area'
            onChange={val => setDescription(val)}
            id="description"
            name="description"
            value={description}
            maxLength={100}
        />
    </StyledSpacing>
}

export default FormExample
