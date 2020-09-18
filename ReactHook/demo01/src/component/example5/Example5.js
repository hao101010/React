import React from 'react';
import Buttons from './Buttons';
import { Color } from './color';
import ShowArea from './showArea';

export default function Example5() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}