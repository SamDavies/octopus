import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { MemoryRouter } from 'react-router-dom'
import BlockContainer from '../components/docs/BlockContainer'
import Search from '../components/Search'
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
        <BlockContainer id="blah">
            <Search value={value} onChange={e => setValue(e.target.value)} />
        </BlockContainer>
    )
}

storiesOf('components/Button', module)

    .add('Normal disalbed2', () => (
        <MemoryRouter>
        <div style={{
            width: '500px'
        }}>
        <InputContainer />
        </div>
        </MemoryRouter>
    ))
    // .add('Normal 2', () => (
    //     <MemoryRouter>
            
    //     </MemoryRouter>
    // ))
    // .add('Normal disalbed', () => (
    //     <MemoryRouter>
    //     </MemoryRouter>
    // ))
