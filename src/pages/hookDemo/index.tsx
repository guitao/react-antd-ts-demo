import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd'
import {
    DELETE_ROW,
    ADD_TO_CART
} from '../../actions/cart-actions';

interface PostItem {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface ColumnsProps {
    title: string,
    dataIndex: string,
    key: string,
    align?: 'left' | 'right' | 'center',
    width?: number,
    render?: (val: any, record: any) => any
}


const Demo = (props: any) => {
    const columns: ColumnsProps[] = [
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
            align: 'center',
            width: 180,
            render: (val, record) => (
                <div>
                    <Button onClick={() => props.history.push({ pathname: '/detail', state: record })} type="link">
                        详情
                    </Button>
                    <Button onClick={() => deleteRow(record.id)} type="link" danger>
                        删除
                    </Button>
                </div>
            ),
        }
    ]

    const deleteRow = (id: number) => {
        console.log("===id====", id)
        props.deletePost(id)
    }

    const addRow = () => {
        let tempObj: { userId: number, id: number, title: string, body: string } = {
            userId: 10001,
            id: Math.floor(Math.random() * 100 + 1),
            title: 'add-test',
            body: '111111111111111111111111111111111111111111'
        }
        props.addPost(tempObj)
    }

    return (
        <div>
            <h3>Redux使用：
                <Button onClick={() => addRow()} type='primary'>新增</Button>
            </h3>
            <Table dataSource={props.posts} columns={columns} rowKey="id" />
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
        deletePost: (id: number) => dispatch({ type: DELETE_ROW, id: id }),
        addPost: (payload: PostItem) => dispatch({ type: ADD_TO_CART, payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);