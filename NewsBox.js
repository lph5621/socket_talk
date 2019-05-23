import React, {Component } from 'react';

import { Tabs, Button } from 'antd';
import io from 'socket.io-client';
import { List, Avatar, Spin } from 'antd';
const TabPane = Tabs.TabPane;

class NewsBox extends Component {
    constructor() {
        super()
        this.state = {
            newTitle: '实时数据',
            emergency: []// 突发事件
        }
       // this.socket = io.connect('http://localhost:7001')
    }
    callback = (key) => {
        console.log(key);
    }
    componentDidMount() {
        // this.socket.on('getEmergencyData', (res) => {
        //     console.log(res)
        //     this.setState({
        //         emergency: res
        //     })
        // })
    }
    render() {
        let {newTitle, emergency} = this.state;
        const operations = <Button>{newTitle}</Button>
        return (
            <div>
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="突发事件" key="1">
                    <List
                    dataSource={emergency}
                    renderItem={item => (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                          }
                          description={item.title}
                        />
                        <div>Content</div>
                      </List.Item>
                    )}
                  >
                    {this.state.loading && this.state.hasMore && (
                      <div className="demo-loading-container">
                        <Spin />
                      </div>
                    )}
                  </List>
                    </TabPane>
                    
                    <TabPane tab="热点事件" key="2">
                    Content of tab 2
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default NewsBox;