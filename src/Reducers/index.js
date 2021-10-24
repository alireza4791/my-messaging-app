import { combineReducers } from "redux";

import { authReducer } from './authReducer';
import { MessagesReducer } from './MessagesReducer';


export default combineReducers({
    auth: authReducer,
    messages: MessagesReducer
})