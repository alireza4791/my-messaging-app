import axios from 'axios';

import { FETCH_USER, FETCH_MESSAGES } from './Types';

export const fetchUser = () => async dispatch => {
    const reponse = await axios.get('/api/current_user');
    //get promise from the back end api
    dispatch({
        type: FETCH_USER,
        payload: reponse.data
    });
}


export const fetchMessages = () => async dispatch => {
    const response = await axios.get('/api/messages');

    dispatch({
        type: FETCH_MESSAGES,
        payload: response.data
    })
}