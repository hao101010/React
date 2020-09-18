// 仓库管理文件
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// import creactSagaMidleware from 'redux-saga'
// import mySagas from './sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose


const enhancers = composeEnhancers(applyMiddleware(thunk))

// const sagaMiddleware = creactSagaMidleware()
// const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
    reducer,
    enhancers
)

// sagaMiddleware.run(mySagas)
export default store