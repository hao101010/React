// 仓库管理文件
const defaultState = {
    placeholderValue: '请输入条目',
    list: [
        '吃饭',
        '睡觉',
        '打游戏',
        '废材'
    ]
}
export default (state = defaultState, action) => {
    // console.log(state, action)
    // reducer内只能接收到state，不能对state进行修改
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.placeholderValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.placeholderValue) {
            newState.list.push(newState.placeholderValue)
        } else {
            alert('输入为空')
        }

        newState.placeholderValue = ''
        return newState
    }
    if (action.type === 'delItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}