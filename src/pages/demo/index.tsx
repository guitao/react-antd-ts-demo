import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import {
    DELETE_ROW
} from '../../actions/cart-actions';



const Demo = (props: any) => {
    const columns: {
        title: string,
        dataIndex: string,
        key: string,
        render?: (val: any, record: any) => any
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
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: (val, record) => <a onClick={() => deleteRow(record.id)}>Delete</a>,
            }
        ]

    const deleteRow = (id: number) => {
        console.log("===id====", id)
        props.deletePost(id)
    }

    return (
        <div>
            {console.log("===props=====", props)}
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        deletePost: (id: number) => dispatch({ type: DELETE_ROW, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);