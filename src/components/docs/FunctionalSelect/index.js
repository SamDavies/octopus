import React, { useState } from 'react'
import Select from '../../Select'
import BlockContainer from '../BlockContainer'

const FunctionalSelect = () => {
    const [value, setValue] = useState('')
    const options = Array.from(Array(3).keys()).map(number => ({
        id: String(number),
        name: String(number),
        value: String(number)
    }))
    return (
        <BlockContainer>
            <Select
                options={options}
                id='functional_select'
                selectedValue={value}
                resetSelectedValue={() => setValue(null)}
                handleSelectChange={(_, val) => setValue(val)}
                label='Functional select that can change values'
            />
        </BlockContainer>
    )
}

export default FunctionalSelect
