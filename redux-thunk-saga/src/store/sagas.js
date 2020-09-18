import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import Axios from 'axios'
import { getListAction } from './actionCreate'
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    const data = { "sponsor": "luojiahao", "proName": "", "proCode": "", "proType": "", "page": 1, "row": 10 }
    // console.log(1)
    const res = yield Axios.post('/tenderProject/findPage', data)
    let list = res.data.data.list
    let arr = []
    list.forEach(item => {
        arr.push(item.proName)
    })
    const action = getListAction(arr)
    yield put(action)
    // Axios.post('/tenderProject/findPage', data)
    //     .then(res => {
    //         let list = res.data.data.list
    //         let arr = []
    //         list.forEach(item => {
    //             arr.push(item.proName)
    //         })
    //         console.log(arr)
    //         const action = getListAction(arr)
    //         put(action)

    //     })
    // console.log(2)
}
export default mySaga