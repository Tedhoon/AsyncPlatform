import axios from 'axios';
import {
    ADD_COMMUNITY,
    DETAIL_COMMUNITY,
    DELETE_COMMUNITY,
    PUT_COMMUNITY
} from './types';
import { tokenConfig } from 'actions/authActions';


export const addCommunity = (community) => (dispatch,getState) => {
    // console.log(`${user_id} << user_id`)
    // const userId = getState().auth.user.id;
    // 아,, Token Permission을 준다음에 django backend에서 self.request.user로 받아오는 거였음ㅁ!!!!! 

    axios.post('/community/create', community, tokenConfig(getState),{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log(res)
        console.log(res.data)
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
    // 끝나고 비동기 라우팅 위해 async
    await axios.delete('/community/'+com_id, tokenConfig(getState))
        .then(res=>{
            dispatch({
                type: DELETE_COMMUNITY
            })
            // 그냥 redux에 dispatch만!
        })
        .catch(err=>{
            alert(err)
            console.log(err)
            console.log("에러났다")
        })

    history.push('/community')
}

export const putCommunity = (community, com_id, history) => async (dispatch, getState) => {
    console.log("put action 실행");
    await axios.put('/community/'+com_id, community, tokenConfig(getState))
        .then(res=>{
            dispatch({
                type: PUT_COMMUNITY,
                payload: res.data
            })
        })
        .catch(err=>{
            alert(err)
        })
    history.push('/community_detail/'+com_id)
}