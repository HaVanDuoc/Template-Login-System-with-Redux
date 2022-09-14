const Login = (payload) => ({
    type: 'LOGIN',
    payload
})

const Logout = () => ({
    type: 'LOGOUT',
})

export { Login, Logout }