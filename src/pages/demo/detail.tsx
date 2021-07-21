import React, { Component } from 'react'
import { Card } from 'antd'

export default class DemoDetail extends Component<any> {

    render() {
        console.log("====this.props=====", this.props)
        const { title, body } = this.props.location.state
        return (
            <div>
                <Card title={title} style={{ width: '100%' }}>
                    <p>{body}</p>
                </Card>
            </div>
        )
    }
}
