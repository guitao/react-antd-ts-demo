import React from 'react';
import './index.css';
import { Layout } from 'antd';
import { Route, Switch, Redirect, HashRouter, Link, BrowserRouter as Router, } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import SliderBar from './sliderBar'
import Home from '../pages/home'
import Demo from '../pages/demo'

const { Header, Sider, Content } = Layout;

class Container extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Router>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">数据中心</div>
                        <SliderBar />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                overflowY: 'scroll'
                            }}
                        >
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route path="/demo" component={Demo} />
                            </Switch>
                        </Content>
                    </Layout>
                </Router>

            </Layout>
        );
    }
}

export default Container;