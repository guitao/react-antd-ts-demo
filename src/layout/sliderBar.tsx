import React, { Component } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';
import slideBarConfig from './slideBarConfig'

const { SubMenu } = Menu;

class SliderBar extends Component<RouteComponentProps> {

    static state = {
    }

    public componentWillMount() {
    }

    public renderSubMenu(item: any) {
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
                            <Link to={e.url}>{e.name}</Link>
                        </Menu.Item>
                    ))}
                </SubMenu>
            );
        }
        return (
            item.hideInMenu ? '' :
                <Menu.Item key={item.url} icon={<UserOutlined />}>
                    <Link to={item.url}>{item.name}</Link>
                </Menu.Item>
        )
    }

    render() {
        const path = this.props.location.pathname;
        return (
            <div>
                <Menu theme="dark" mode="inline" selectedKeys={[path]}>
                    {
                        slideBarConfig.map(this.renderSubMenu)
                    }
                </Menu>
            </div>
        )
    }
}

export default withRouter(SliderBar);
