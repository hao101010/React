import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            console.log(123)
            window.removeEventListener('resize', onResize)
        }
    }, [onResize])

    return size
}


function Example8() {
    const size = useWinSize()

    return (
        <div>
            <span>宽度：{size.width}</span>
            <span>高度：{size.height}</span>
        </div>
    )
}
export default Example8