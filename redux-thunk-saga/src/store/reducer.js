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
    let newState = JSON.parse(JSON.stringify(state))
    // console.log(action)
    switch (action.type) {
        case 'changeInput':
            newState.placeholderValue = action.value
            return newState
        case 'addItem':
            if (newState.placeholderValue) {
                newState.list.push(newState.placeholderValue)
                newState.placeholderValue = ''
            } else {
                alert('输入为空')
            }

            return newState
        case 'delItem':
            newState.list.splice(action.index, 1)
            return newState
        case 'getlist':
            newState.list = action.data
            return newState
        default:
            return state
    }

}