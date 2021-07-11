import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


export default class SliderBar extends Component {
    render() {
        return (
            <div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to='/home'>主页</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to='/demo'>Demo</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
