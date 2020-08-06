import { Checkbox, MediaQuery, Input, Label, PasswordInput, Select, StarRating, Textarea } from '@stylindex/octopus'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${MediaQuery.tablet} {
        margin-right: 20px;
        width: 50%;
    }

    & > *:not(:last-child) {
        margin-bottom: 40px;
    }
`

const FormExample = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState(null)
    const [selectValue, setSelectValue] = useState<string>('')
    const [multiSelect, setMultiSelect] = useState<string[]>([])
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)
    const selectOptions = [1, 2, 3].map(index => ({
        id: String(index),
        value: `value ${index}`
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
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <Select
            options={selectOptions}
            id='select'
            selectedValue={selectValue}
            showResetControls
            onClear={() => setSelectValue('')}
            onSelect={id => setSelectValue(id)}
            label='Single Select'
        />
        <Select
            options={selectOptions}
            id='select'
            selectedValue={multiSelect}
            showResetControls
            allowMultiSelect
            onClear={() => setMultiSelect([])}
            onDeselect={id => setMultiSelect(multiSelect.filter(item => item !== id))}
            onSelect={id => setMultiSelect([...multiSelect, id])}
            label='Multi Select'
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
        <div>
            <Label>
                Medium Star Rating
            </Label>
            <StarRating
                size='medium'
                inputName="rating1"
                rating={rating}
                onChange={value => setRating(value)}
            />
        </div>
        <div>
            <Label>
                Large Star Rating
            </Label>
            <StarRating
                size='large'
                inputName="rating1"
                rating={rating}
                onChange={value => setRating(value)}
            />
        </div>
    </StyledSpacing>
}

export default FormExample
