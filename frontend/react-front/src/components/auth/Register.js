import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../root/api';


const Register = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    
        
    const usernameChange = (e) => {
        setUsername(e.target.value)
    }
    
    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
        
    const onSubmit = (e) => {
        // e.preventDefault;
        // console.log(username, password, email)
    }

    return (
        <React.Fragment>
            <RegisterForm onSubmit={onSubmit}>
                <UsernameInput value={username} onChange={usernameChange} />
                <EmailInput value={email} onChange={emailChange} />
                <PasswordInput value={password} onChange={passwordChange} />
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


export default Register;