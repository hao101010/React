import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, delItemAction, getMyListAction } from './store/actionCreate'
import TodoListUI from './TodoListUI'
// import Axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (

            <TodoListUI
                placeholderValue={this.state.placeholderValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem} />

        )
    }
    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)


        // const data = { "sponsor": "luojiahao", "proName": "", "proCode": "", "proType": "", "page": 1, "row": 16 }
        // Axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        //     .then(res => {
        //         console.log(res)
        //     })
        // const action = getTodoList()
        // store.dispatch(action)
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
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