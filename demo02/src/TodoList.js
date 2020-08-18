import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Input
                        placeholder={this.state.placeholderValue}
                        style={{ width: '250px', marginRight: '20px' }}
                        onChange={this.changeInputValue} />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <List
                        bordered
                        header={<div style={{ color: 'red' }}>条目列表</div>}
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                        style={{ width: '330px', cursor: 'pointer' }}
                    />
                </div>
            </div >
        );
    }
    changeInputValue(e) {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
}

export default TodoList;