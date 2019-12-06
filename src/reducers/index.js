import {combineReducers} from 'redux';
import loginReducer from './account/login';
import gifsReducer from "./dashboard/gifs";
import templatesReducer from "./dashboard/templates";

export default combineReducers({
    loginReducer,
    gifsReducer,
    templatesReducer
})
