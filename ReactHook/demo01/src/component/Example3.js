import React, { useState, createContext, useContext } from 'react';


/*
    父组件向子组件传值：
        在父组件中使用createContext创建一个变量，通过变量名.Provider标签将需要传值的变量放在value 属性中，
        在子组件中使用uesContext接收到该变量
*/
const countContext = createContext()

function Counter() {
    let { count, name } = useContext(countContext)
    return (<h2>计数{count}年龄{name}</h2>)
}

function Exmaple4() {
    const [count, setCount] = useState(0)       // 数组结构
    const [age, setAge] = useState(18)
    const name = 'zhangsan'
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            <p>You age {age} years</p>
            <button onClick={() => { setAge(age + 1) }}>Click</button>
            <countContext.Provider value={{ count, age, name }}>
                <Counter />
            </countContext.Provider>
        </div>
    )
}

export default Exmaple4;