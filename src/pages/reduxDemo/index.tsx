import React, { useState, useEffect } from 'react'

import { Button, Table } from 'antd'

const columns: {
    title: string,
    dataIndex: string,
    key: string
}[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '内容',
            dataIndex: 'body',
            key: 'body'
        }
    ]

const Home = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [tableData, setTableData] = useState<any>();

    function fetchList(): void {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setTableData(res)
            })
    }

    useEffect(() => {
        fetchList()
        return () => {
            
        }
    }, [])

    return (
        <div>
            <h3>Hooks使用：</h3>
            <Table loading={loading} dataSource={tableData} columns={columns} rowKey="id"/>
        </div>
    )
}

export default Home;