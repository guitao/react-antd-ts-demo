import React, { useReducer } from 'react'

interface userIProp {
    name: string,
    team: string,
    address: string,
    age: number
}

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

