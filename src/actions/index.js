import axios from 'axios'

import { FETCH_USER } from './Types';

export const fetchUser = () => async dispatch => {
    const reponse = await axios.get('/api/current_user');
    //get promise from the back end api
    dispatch({
        type: FETCH_USER,
        payload: reponse.data
    });
}