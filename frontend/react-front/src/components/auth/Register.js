import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import api from 'components/root/api';
import { register } from 'actions/authActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Register = ({isAuthenticated, register}) => {
    const history = useHistory();
    useEffect(()=>{
        if(isAuthenticated){
            console.log("회원가입 성공")
            history.push('/')
        }else{
            console.log("회원가입 실패")
        }
    },[isAuthenticated])

    const [ user, setUser ] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = user;

    const onChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }
        
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
        // reqRegister()
        register({username, password, email});
    }
    
    // const reqRegister = async() => {
    //     await api.Register({
    //         'username' : username,
    //         'email': email,
    //         'password': password
    //     })
    //     .then(async(res)=>{
    //         const user = await res.data
    //         console.log(res.data)
    //         localStorage.setItem("token", user.token);
    //         // 여기서 setItem만 해주니까 initialState가 바뀌고... dispatch가 작동해서 USER_LOADING 실행인건가..?
    //     })

    // }

    return (
        <React.Fragment>
            <RegisterForm onSubmit={onSubmit}>
                <UsernameInput value={username} name="username" onChange={onChange} />
                <EmailInput value={email} name="email" onChange={onChange} />
                <PasswordInput value={password} name="password" onChange={onChange} />
                <Submit />               
            </RegisterForm>
        </React.Fragment>
    )
}

const RegisterForm = styled.form.attrs({
    method: 'POST'
})``;

const UsernameInput = styled.input.attrs({
    type: 'text',
    placeholder: 'username',
    required: true,
})`
    border: 1px green solid;
`; 

const EmailInput = styled.input.attrs({
    type: 'email',
    placeholder: 'email',
    required: true,
})``;

const PasswordInput = styled.input.attrs({
    type: 'password',
    placeholder: 'password',
    required: true,
})``;

const Submit = styled.input.attrs({
    type: 'submit',
})``

Register.protoTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register})(Register);