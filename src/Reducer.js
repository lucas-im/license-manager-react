import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { landingReducer } from './components/landing/LandingReducer'
import { loginReducer } from './components/login/LoginReducer'
import { authReducer } from './Auth'

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user: loginReducer,
        clients: landingReducer,
        auth: authReducer
    });

export default createRootReducer
