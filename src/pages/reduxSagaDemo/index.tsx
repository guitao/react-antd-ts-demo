import React, { useReducer } from 'react'

import { Divider } from 'antd'
import Message from '../../componments/Message'
import Navbar from '../../componments/Navbar'

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
const initialState = { count: 0 };

export const AppContext = React.createContext<any>({ username: '' });

const ReduxSagaDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <AppContext.Provider value={{
                username: 'superawesome'
            }}>
                Count: {state.count}
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>

                <Divider />
                <Message />

                <Divider />
                <Navbar />
            </AppContext.Provider>

        </>
    );
}

export default ReduxSagaDemo;