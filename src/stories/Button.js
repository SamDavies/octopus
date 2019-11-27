import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { MemoryRouter } from 'react-router-dom'
import Select from '../components/Select'
import Table from '../components/Table'

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

const columns = [
    {
        id: 'first',
        label: 'First',
        accessor: 'first'
    },
    {
        id: 'second',
        label: 'second',
        cool: false,
        accessor: 'second'
    },
    {
        id: 'blah.cool.no',
        label: 'yeah',
        cool: false,
        foo: true,
        accessor: 'blah.cool.no'
    }
]

const data = [
    {
        id: '123',
        first: 'blah',
        second: 'no?',
        blah: {
            cool: {
                no: 25
            }
        }
    },
    {
        id: '1234',
        first: 'blah2',
        second: 'what',
        blah: {
            cool: {
                no: null
            }
        }
    },
    {
        id: '12345',
        first: 'blah23',
        second: 'what',
        blah: {
            cool: {
                no: null
            }
        }
    }
]


// const InputContainer = ({exist = '', inputProps = {}}) => {
//     const [value, setValue] = useState(exist)
//     return (
//         <BlockContainer id="blah">
//             <Search value={value} onChange={e => setValue(e.target.value)} />
//         </BlockContainer>
//     )
// }

storiesOf('components/Button', module)

    .add('Normal disalbed2', () => {

        // const newcolumns = React.useMemo(() => columns)
        // const newdata = React.useMemo(() => data)
        
        const [newData, setData] = useState(data)
        return (


        <MemoryRouter>
        <div>
            <button onClick={() => {
                setData(
                    [...newData,
                        {
                            id: Math.random(),
                            first: 'blah23' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                            second: 'what',
                            blah: {
                                cool: {
                                    no: null
                                }
                            }
                        }
                    ]
                )
            }}>click me</button>
            
            <Table columns={columns}
             data={newData}
                title="cool?"
                hasSearch
                options={[
                    {
                        name: 'foo',
                        id: 'what',
                        onClick: (a,b,c) => {
                            console.log(a,b,c)
                        }
                    }
                ]}
                customComponents={{
                    cell: (cellPath, row, value, column) => {
                        if (cellPath.includes('blah')) {
                            return <Select
                                selectType="secondary"
                                label="cool?"
                                hide
                                options={[{
                                    name: 'i great?',
                                    value: 'cool',
                                    id: '1323'
                                }]}
                            />
                        }
                        return <>{value}</>
                    }
                }}
            />
        </div>
        </MemoryRouter>
        )
    })
    // .add('Normal 2', () => (
    //     <MemoryRouter>
    //     <BlockContainer>
    //         <Search
    //             hasDropdown={false}
    //             // value=[]
    //             name="search"
    //             onInputChange={e => {
    //                 const inputVal = e.target.value
    //                 // setValue(inputVal)
    //             }}
    //         />
    //         </BlockContainer>
    //     <BlockContainer>
    //         <Search
    //             // hasDropdown={false}
    //             // value=[]
    //             name="search"
    //             onInputChange={e => {
    //                 const inputVal = e.target.value
    //                 // setValue(inputVal)
    //             }}
    //         />
    //         </BlockContainer>

    //     </MemoryRouter>
    // ))
    // .add('Normal disalbed', () => (
    //     <MemoryRouter>
    //     </MemoryRouter>
    // ))
