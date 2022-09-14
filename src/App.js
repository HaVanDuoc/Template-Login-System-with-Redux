import React from 'react'
import { useSelector } from 'react-redux'
import Login from './components/Login'
import Logout from './components/Logout'
import { selectUser } from './redux/reducers/AuthReducer'

function App() {
    const user = useSelector(selectUser)

    console.log(user);

    return (
        <React.Fragment>
            {user ? <Logout /> : <Login />}
        </React.Fragment>
    )
}

export default App