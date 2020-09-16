import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Index() {
    // useEffect(() => {
    //     console.log(`useEffect => index`)
    //     return () => {
    //         console.log('走了，index')
    //     }
    // }, [])
    return (
        <h2>首页</h2>
    )
}

function List() {
    // useEffect(() => {
    //     console.log(`useEffect => list`)
    // })
    return (
        <h2>列表</h2>
    )
}

function Exmaple1() {
    const [count, setCount] = useState(0)       // 数组结构
    // let _useState = useState(0)
    // let count = _useState[0]
    // let setCount = _useState[1]

    // 代替生命周期函数
    useEffect(() => {
        console.log(`useEffect => ${count}`)
        return () => {
            console.log('==================')
        }
    }, [count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>

        </div>
    )
}

export default Exmaple1;