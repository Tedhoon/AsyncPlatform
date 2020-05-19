import axios from 'axios';
import {
    ADD_COMMUNITY,
    DETAIL_COMMUNITY,
    DELETE_COMMUNITY
} from './types';

import { tokenConfig } from 'actions/authActions';
import { useHistory } from 'react-router-dom';


export const addCommunity = (community) => (dispatch,getState) => {
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
    console.log("deleteCommunity 실행!")
    axios.get('/community/'+com_id, tokenConfig(getState))
        .then(res=>{
            dispatch({
                type: DETAIL_COMMUNITY,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err)
            console.log("delete에러났다요")
            alert(err)
        })
}



export const deleteCommunity = (com_id, history) => async (dispatch, getState) => {
    console.log("딜리트실행,,,,")
    console.log(history)
    await axios.delete('/community/'+com_id, tokenConfig(getState))
        .then(res=>{
            dispatch({
                type: DELETE_COMMUNITY
            })

            // window.location = '/community';
        })
        .catch(err=>{
            alert(err)
            console.log(err)
            console.log("에러났다")
        })
        
    history.push('/community')
}