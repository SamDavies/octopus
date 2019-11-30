const columns = [
    {
        id: 'name',
        label: 'name',
        accessor: 'name'
    },
    {
        id: 'role',
        label: 'role',
        accessor: 'role'
    },
    {
        id: 'nested.key',
        label: 'Nested Key',
        accessor: 'nested.key'
    }
]

const data = [
    {
        id: '123',
        name: 'Mystery Person',
        role: 'CEO',
        nested: {
            key: '123'
        }
    },
    {
        id: '1234',
        name: 'Another Mystery Person',
        role: 'VP of Stuff',
        nested: {
            key: null
        }
    },
    {
        id: '12345',
        name: 'One More Mystery Person',
        role: 'Designer',
        nested: {
            key: 'null'
        }
    }
]

const mockTableData = {
    data,
    columns
}

export default mockTableData
