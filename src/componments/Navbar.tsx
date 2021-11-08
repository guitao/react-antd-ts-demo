import React, { useContext } from 'react'

// import { Table } from 'antd'

import { AppContext } from '../pages/reduxSagaDemo'

const Navbar = () => {
    const theme = useContext(AppContext);
    console.log("==theme===", theme)
    return (
        <>
            <div>navbar组件{theme.username}</div>
        </>
    );
}

export default Navbar;