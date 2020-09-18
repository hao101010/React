import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Input
                        placeholder={this.props.placeholderValue}
                        style={{ width: '250px', marginRight: '20px' }}
                        // value={this.props.placeholderValue}
                        onChange={this.props.changeInputValue} />
                    <Button
                        type="primary"
                        onClick={this.props.clickBtn}
                    >增加</Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <List
                        bordered
                        header={<div style={{ color: 'red' }}>条目列表</div>}
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>)}
                        style={{ width: '330px', cursor: 'pointer' }}
                    />
                </div>
            </div >
        );
    }
}

export default TodoListUI;