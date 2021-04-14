import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {mainPageReducer} from './MainPage/MainPageReducer';

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        clients: mainPageReducer
    });

export default createRootReducer;
