import { LOGIN_SUCCESS, LOGOUT } from '../../Types'

const user = JSON.parse(sessionStorage.getItem('user'))
const initialState = user ? {
    clients: [],
    user: user,
    isLoggedIn: true
} : {
    clients: [],
    user: null,
    isLoggedIn: false
}
export const landingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        case LOGOUT:
            return {
                isLoggedIn: false
            }
        default:
            return state
    }
};
