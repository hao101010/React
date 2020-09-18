import React, { useContext } from 'react';
import { colorContext, UPDATE_COLOR } from './color';

export default function Buttons() {
    const { dispacth } = useContext(colorContext)
    return (
        <div>
            <button onClick={() => { dispacth({ type: UPDATE_COLOR, color: 'red' }) }}>red</button>
            <button onClick={() => { dispacth({ type: UPDATE_COLOR, color: 'yellow' }) }}>yellow</button>
        </div>
    )
}