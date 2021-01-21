import { combineReducers } from 'redux';
import articleReducer from './articleReducer'
import authReducer from './authReducer'
// import userReducer from './userReducer';

export default combineReducers({
    content: articleReducer,
    auth: authReducer
})