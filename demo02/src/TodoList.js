import React, { Component } from 'react'
import store from './store'
import { changeInputAction, addItemAction, delItemAction, getMyListAction } from './store/actionCreate'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        // 设置监听函数，监听state变化时更新视图
        store.subscribe(this.storeChange)
    }
    render() {
        return (

            <TodoListUI
                // 向子组件传值、传递方法
                placeholderValue={this.state.placeholderValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem} />

        )
    }
    componentDidMount() {
        // 获取action
        const action = getMyListAction()
        // 发出action
        store.dispatch(action)
    }
    // 监听input框内输入变化
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    // store.getState()获取store中的数据，并this.setState()注入到当前state中
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = delItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;