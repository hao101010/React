import React, { useContext } from 'react';
import { colorContext } from './color'

export default function ShowArea() {
    const { color } = useContext(colorContext)
    return (
        <div style={{ color: color }}>字体颜色为blue</div>
    )
}