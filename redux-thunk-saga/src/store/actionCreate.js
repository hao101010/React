import {
    CHANGE_INPUT,
    ADD_ITEM,
    DEL_ITEM,
    GET_LIST,
    GET_MY_LIST
} from './actionTypes'
import Axios from 'axios';

//输入的action构造
const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

//增加的action
const addItemAction = () => ({
    type: ADD_ITEM
})

//删除的action
const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

const getListAction = data => ({
    type: GET_LIST,
    data
})

//获取列表数据
const getTodoList = () => {
    return (dispatch) => {
        const data = { "sponsor": "luojiahao", "proName": "", "proCode": "", "proType": "", "page": 1, "row": 10 }
        Axios.post('/tenderProject/findPage', data)
            .then(res => {
                let list = res.data.data.list
                let arr = []
                list.forEach(item => {
                    arr.push(item.proName)
                })
                const action = getListAction(arr)
                dispatch(action)
            })
    }
}

const getMyListAction = data => ({
    type: GET_MY_LIST,
    data
})

export {
    changeInputAction,
    addItemAction,
    delItemAction,
    getTodoList,
    getListAction,
    getMyListAction
}