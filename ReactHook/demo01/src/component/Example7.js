import React, { useEffect, useRef, useState } from 'react';

export default function Example7() {
    const inputEL = useRef(null)
    const clickbtn = () => {
        console.log(inputEL)
        inputEL.current.value = 'hello world'
    }


    const [text, setText] = useState('技术胖')

    const textRef = useRef()
    useEffect(() => {
        textRef.current = text
        console.log('textRef.current', textRef.current, text)
    })
    return (
        <>
            <input ref={inputEL} type="text" />
            <button onClick={clickbtn}>在按钮上显示文字</button>
            <br />
            <input value={text} onChange={(e) => { setText(e.target.value) }} />
        </>
    )
}