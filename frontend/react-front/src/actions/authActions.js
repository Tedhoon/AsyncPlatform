import {
    USER_LOADED,
    USER_LOADING,
    // AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types';

import axios from 'axios';
// import api from 'component/root/api';
// import { returnErrors } from './messageActions'


// Check Token & Load User
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({
        type: USER_LOADING
    })
    
    axios.get('/auth/user',tokenConfig(getState))
        .then(res => {
            console.log("loadUser 작동이다아")
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
        //    dispatch(returnErrors(err.response.data,err.response.status))
        //    dispatch({
        //         type: AUTH_ERROR
        //    })
        })
}


// Login User
export const login = (username,password) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }


    // Request Body
    const body = JSON.stringify({username, password})

    axios.post('/auth/login',body,config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            // dispatch(returnErrors(err.response.data,err.response.status))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}


// Register User
export const register = ({username, password, email}) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }


    // Request Body
    const body = JSON.stringify({username, password, email})

    axios.post('/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            // dispatch(returnErrors(err.response.data,err.response.status))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}


// Lgout User
export const logout = () => (dispatch, getState) => {
                        // body를 안받아도 되니까 null ㄱㄱ
    axios.post('/auth/logout',null,tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        })
        // .catch(err => {
        //    dispatch(returnErrors(err.response.data,err.response.status))
        // })
}


// User Dashboard
// export const myPosts = () => (dispatch,getState) => {
//     axios.get('/api/auth/dashboard',tokenConfig(getState))
//         .then(res => {

//             dispatch({
//                 type: MY_POSTS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {

//            dispatch(returnErrors(err.response.data,err.response.status))
//         })
// }


// 토큰을 확인하고 토큰이 있을 시 header에 첨부하는 로직
export const tokenConfig = getState => {
    // state에서 토큰을 가져옴
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    // 토큰 있으면 header에 넣어준다.
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
        console.log('token 헤더에 장착')
    }

    return config;
}
