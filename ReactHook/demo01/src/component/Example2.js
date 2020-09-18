import React, { useState } from 'react';

function Exmaple2() {
    const [age, setAge] = useState(18)
    const [sex, setASex] = useState('男')
    const [work, setWork] = useState('Web')
    return (
        <div>
            <p>小明今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>

    )
}

export default Exmaple2;