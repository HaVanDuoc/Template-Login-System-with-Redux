const initialState = {
    user: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload,
            }

        case 'LOGOUT':
            return {
                user: null,
            }

        default:
            return state
    }
}

export const selectUser = state => state.Auth.user

export default AuthReducer