import React from 'react';
import './index.css';
import { Layout } from 'antd';
import { Route, Switch, Redirect, HashRouter, Link, BrowserRouter as Router, } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import SliderBar from './sliderBar'
import Home from '../pages/reduxDemo'
import Demo from '../pages/hookDemo'
import DemoDetail from '../pages/hookDemo/detail'
import ReduxSagaDemo from '../pages/reduxSagaDemo'
import Test from '../pages/test'
import Sub1 from '../pages/subDemo/sub_1'
import Sub2 from '../pages/subDemo/sub_2'

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
                        <div className="logo">Admin后台管理</div>
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
                                <Route path="/detail" component={DemoDetail} />
                                <Route path="/redux_saga_demo" component={ReduxSagaDemo} />
                                <Route path="/test" component={Test} />
                                <Route path="/sub/sub_1" component={Sub1} />
                                <Route path="/sub/sub_2" component={Sub2} />

                            </Switch>
                        </Content>
                    </Layout>
                </Router>

            </Layout>
        );
    }
}

export default Container;