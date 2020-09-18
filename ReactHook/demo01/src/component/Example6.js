import React, { useState, useMemo } from 'react';

export default function Example6() {
    const [xiaohong, setXiaohong] = useState('小红准备下班')
    const [xiaoming, setXiaoming] = useState('小明准备删库跑路')
    return (
        <div>
            <button onClick={() => { setXiaohong(new Date().toLocaleTimeString()) }}>小红</button>
            <button onClick={() => { setXiaoming(new Date().toLocaleTimeString() + '，爆炸！') }}>小明</button>
            <ChildComponent name={xiaohong}>{xiaoming}</ChildComponent>
        </div>
    )
}


function ChildComponent({ name, children }) {
    function changeXiaohong() {
        console.log('她跑啦')
        return name + '，180迈开跑'
    }
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}