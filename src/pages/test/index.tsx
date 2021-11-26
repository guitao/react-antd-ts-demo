import React, { useReducer, useEffect, useState, useRef } from 'react'
import { post } from '../../server/api'

const userState = {
    name: 'mike',
    team: '大师组',
    address: '光明大道',
    age: 11
}

const personalReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case 'updateName':
            return {
                ...prevState,
                name: action.name
            }
        case 'updateTeam':
            return {
                ...prevState,
                team: action.team
            }
        case 'updateAddress':
            return {
                ...prevState,
                address: action.address
            }
    }
}

const Test = () => {
    const [state, dispatch] = useReducer(personalReducer, userState)
    const [count, setCount] = useState(0)
    const lastCount = useRef(count)

    useEffect(() => {
        post('/user/query', {
            name: '111111'
        }).then(res => {
            console.log('====res=====', res)
        })
        return () => {

        }
    }, [])

    useEffect(() => {
        lastCount.current = count
        setTimeout(() => {
            console.log(`You clicked ${lastCount.current} times`);
        }, 3000);
    });

    return (
        <div>
            <h1>1.useReduce的使用：</h1>
            <p>name: {state.name}</p>
            <button onClick={() => dispatch({
                type: 'updateName', name: '11111'
            })}>点击</button>

            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}

export default Test;

