import {combineReducers} from 'redux';
import loginReducer from './account/login';
import gifsReducer from "./dashboard/gifs";
import templatesReducer from "./dashboard/templates";
import textReducer from "./dashboard/text";

export default combineReducers({
    loginReducer,
    gifsReducer,
    textReducer,
    templatesReducer
})
