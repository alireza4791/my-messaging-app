import { FETCH_MESSAGES } from '../actions/Types';

export const MessagesReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_MESSAGES:
            return [...state, action.payload]
        default:
            return state;
    }
}
