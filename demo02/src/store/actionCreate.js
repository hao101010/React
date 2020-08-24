import {
    CHANGE_INPUT,
    ADD_ITEM,
    DEL_ITEM
} from './actionTypes'

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

export {
    changeInputAction,
    addItemAction,
    delItemAction
}