import axios from 'axios';
import {
    ADD_COMMUNITY,
    DETAIL_COMMUNITY
} from './types';

import { tokenConfig } from 'actions/authActions';


export const addCommnunity = (community) => (dispatch,getState) => {
    // console.log(community);
    // console.log("&&&&")
    axios.post('/community/', community, tokenConfig(getState),{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        dispatch({
            type: ADD_COMMUNITY,
            payload : res.data
        })
    })
    // .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}

export const detailCommunity = (com_id) => (dispatch, getState) => {
    axios.get('/community/'+com_id, tokenConfig(getState))
        .then(res=>{
            dispatch({
                type: DETAIL_COMMUNITY,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}