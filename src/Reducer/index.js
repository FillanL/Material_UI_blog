import { combineReducers } from 'redux';
import articleReducer from './articleReducer'
// import campaignsReducer from './campaignsReducer';
// import userReducer from './userReducer';

export default combineReducers({
    content: articleReducer
    // user: userReducer
})