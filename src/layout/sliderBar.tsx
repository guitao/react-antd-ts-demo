import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';
import slideBarConfig from './slideBarConfig'

const { SubMenu } = Menu;

class SliderBar extends Component {

    state = {
        defaultSelectedKeys: []
    }

    componentWillMount() {
        this.getSelectKey()
    }

    getSelectKey() {
        alert(1)
        const pathname = window.location.pathname;
        let selectKey = 0
        if (pathname === '/') {
            selectKey = 0
        } else {
            selectKey = slideBarConfig.findIndex(item => item.url === pathname)
        }
        console.log("===selectKey====", selectKey)
        this.setState({
            defaultSelectedKeys: [selectKey + '']
        })
    }

    handleClick(key: string) {
        console.log("====key====", key)
        console.log('===this.prop=====', this.props)
    }

    renderSubMenu(item: any) {
        if (item.children.length > 0) {
            return (
                <SubMenu
                    key={item.url}
                    title={
                        <span>
                            <UserOutlined />
                            <span>{item.name}</span>
                        </span>
                    }
                >
                    {item.children.map((e: any) => (
                        <Menu.Item key={e.url}>
                            {/* <span>{e.name}</span> */}
                            <Link onClick={() => this.getSelectKey.bind(this)} to={item.url}>{item.name}</Link>
                        </Menu.Item>
                    ))}
                </SubMenu>
            );
        }
        return (
            item.hideInMenu ? '' :
                <Menu.Item key={item.key} icon={<UserOutlined />}>
                    <Link onClick={() => this.getSelectKey.bind(this)} to={item.url}>{item.name}</Link>
                </Menu.Item>
        )
    }

    render() {
        const { defaultSelectedKeys } = this.state

        return (
            <div>
                <Menu onClick={({ key }) => this.handleClick(key)} theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
                    {
                        slideBarConfig.map(this.renderSubMenu)
                    }
                </Menu>
            </div>
        )
    }
}

export default SliderBar;
