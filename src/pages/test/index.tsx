import React, { useReducer, useEffect } from 'react'
import { get } from '../../server/api'

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

    useEffect(() => {
        get('/test').then(res => {
            console.log('====res=====', res)
        })
        return () => {

        }
    }, [])

    return (
        <div>
            <h1>1.useReduce的使用：</h1>
            <p>name: {state.name}</p>
            <button onClick={() => dispatch({
                type: 'updateName', name: '11111'
            })}>点击</button>
        </div >
    )
}

export default Test;

