import { GET_USER, TERMINATE_LICENSE, LOGOUT } from '../../Types'

const initialState = {
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case TERMINATE_LICENSE:
            return {
                ...state,
                clients: [state.clients.filter(item => item.id !== action.payload.id), action.payload],
            }
        default:
            return state
    }
};
