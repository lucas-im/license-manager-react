
const data = JSON.parse(sessionStorage.getItem('user'))
const initialState = data ? {
    isLoggedIn: true,
    token: data.token,
    email: data.user.email,
    name: data.user.name
} : {
    isLoggedIn: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state
    }
};
