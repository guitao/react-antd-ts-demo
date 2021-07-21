import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import slideBarConfig from './slideBarConfig'


export default class SliderBar extends Component {

    state = {
        defaultSelectedKeys: []
    }

    componentWillMount() {
        this.getSelectKey()
    }

    getSelectKey() {
        const pathname = window.location.pathname;
        let selectKey = 0
        if (pathname === '/') {
            selectKey = 0
        } else {
            selectKey = slideBarConfig.findIndex(item => item.url === pathname)
        }
        this.setState({
            defaultSelectedKeys: [selectKey + '']
        })
    }

    render() {
        const { defaultSelectedKeys } = this.state

        return (
            <div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
                    {
                        slideBarConfig.map((item, index) => {
                            return (
                                item.hideInMenu ? '' :
                                    <Menu.Item key={index} icon={<UserOutlined />}>
                                        <Link onClick={() => this.getSelectKey()} to={item.url}>{item.name}</Link>
                                    </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}
