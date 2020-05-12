import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import api from 'components/root/api';
import { login } from 'actions/authActions';

// 여기서 login을 인자로 받아와야 connect 가능한듯
const Login = ({isAuthenticated,login}) => {
    const history = useHistory();
    useEffect(() => {
        if(isAuthenticated){
            console.log("로그인성공!")
            history.push('/');
        }else{
            console.log("로그인실패!")
        }

    },[isAuthenticated]);

    const [ user, setUser ] = useState({
        username: '',
        password: ''
    })

    const { username, password } = user;

    const userform = useRef()
    
    const onChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });

    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(username,password);

    };

    // const [ username, setUsername ] = useState('');
    // const [ password, setPassword ] = useState('');

    // const [ authenticate, setAuthenticate ] = useState({
    //     token: localStorage.getItem('token'),
    //     isAuthenticated: null,
    //     user: null
    //     })


    // const checkAuthenticate = async() => {
    //     await api.Login({
    //         'username':username, 'password':password
    //     })
    //     .then(async(res) => {
    //         const user = await res.data
    //         setAuthenticate({
    //             ...authenticate,
    //             token: user.token,
    //             isAuthenticated: true,
    //             user: user.user
    //         })
    //         localStorage.setItem("token", user.token);
            
    //         alert("반가워요!")
    //     }).catch(err => {
    //         console.log(err)
    //         localStorage.removeItem("token");
    //         setAuthenticate({
    //             token: null,
    //             isAuthenticated: false,
    //             user: null
    //         })

    //         // 틀렸으니까 다시 front-init
    //         setUsername('')
    //         setPassword('')
    //         userform.current.focus()
    //         alert("없는 유저!")      
    //     });
    // }

    // const usernameChange = (e) => {
    //     setUsername(e.target.value)
    // }

    // const passwordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Submit")
    //     checkAuthenticate();
    // }




    return (
        <div>
            <LoginContainer>
                <LoginForm onSubmit={onSubmit} >
                    Username :
                    <UsernameInput ref={userform} name="username" value={username} onChange={onChange} />
                    <br />
                    Password :
                    <PasswordInput name="password" value={password} onChange={onChange} />
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



Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);