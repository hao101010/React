import React, { createContext, useReducer } from 'react';


export const colorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {
    const [color, dispacth] = useReducer(reducer, 'blue')
    return (
        <colorContext.Provider value={{ color, dispacth }}>
            {props.children}
        </colorContext.Provider>
    )
}