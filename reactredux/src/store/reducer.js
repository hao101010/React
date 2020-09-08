const defaultState = {
    inputValue: 'hello world',
    list: [1, 2, 3]
}


export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'changeinput':
            newState.inputValue = action.value
            return newState
        case 'btnclick':
            let list = newState.list
            list.push(newState.inputValue)
            newState.inputValue = ''
            newState.list = list
            return newState
        case 'deleteitem':
            newState.list.splice(action.index, 1)
            return newState
        default:
            break
    }
    return state
}