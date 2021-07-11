import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'

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

const Demo = (props: any) => {
    return (
        
        <div>
            <h3>Redux使用：</h3>
            <Table dataSource={props.posts} columns={columns} />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        posts: state.shoppingCart.posts
    }
}
export default connect(mapStateToProps)(Demo);