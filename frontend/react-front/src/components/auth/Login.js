import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { 
//     USER_LOADING,
//     USER_LOADING,
//     AUTH_ERROR
// } from './AuthStatus';
import api from '../root/api';

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ authenticate, setAuthenticate ] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null
        })

    useEffect(function(){
        // 디버깅용
        console.log('useeffect!!')
        console.log(authenticate)
    },[authenticate])
    
    const checkAuthenticate = async() => {
        await api.Login({
            'username':username, 'password':password
        })
        .then(async(res) => {
            const user = await res.data
            setAuthenticate({
                ...authenticate,
                token: user.token,
                isAuthenticated: true,
                user: user.user
            })
            localStorage.setItem("token", user.token);
            
            alert("반가워요!")
        }).catch(err => {
            console.log(err)
            localStorage.removeItem("token");
            setAuthenticate({
                token: null,
                isAuthenticated: false,
                user: null
            })
            alert("없는 유저!")       
        });
    }

    const usernameChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
        checkAuthenticate();
    }

    return (
        <div>
            <LoginContainer>
                <LoginForm onSubmit={onSubmit} >
                    Username :
                    <UsernameInput value={username} onChange={usernameChange} />
                    <br />
                    Password :
                    <PasswordInput value={password} onChange={passwordChange} />
                    <Submit />
                </LoginForm>
                계정이 없으심까? 👉 <Link to="/register">Register</Link>
            </LoginContainer>            
        </div>
    )
}

const LoginContainer = styled.div`
    width: 100%;
    height: 500px;
    border: red solid 1px;
`; 

const LoginForm = styled.form.attrs({
    method: 'POST'
})``;

const Submit = styled.input.attrs({
    type: 'submit',
})``

const UsernameInput = styled.input.attrs({
    type: 'text',
    placeholder: 'username',
    required: true,
})`
    border: 1px green solid;
`; 

const PasswordInput = styled.input.attrs({
    type: 'password',
    placeholder: 'password',
    required: true,
})``;

export default Login;