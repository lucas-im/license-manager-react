import {
    QUERY_BY_PHONE,
    QUERY_BY_NAME,
    EXTEND_LICENSE_DURATION,
    TERMINATE_LICENSE
} from "./MainPageTypes"

const initialState = {
    clients: [],
};

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUERY_BY_PHONE:
        case QUERY_BY_NAME:
            return {
                ...state,
                clients: action.payload
            };
        case EXTEND_LICENSE_DURATION:
        case TERMINATE_LICENSE:
            return {
                ...state,
                clients: [state.clients.filter(item => item.id !== action.payload.id), action.payload],
            }
        default:
            return state
    }
};
