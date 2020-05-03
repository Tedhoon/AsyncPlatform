import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {

    // const [ login, setLogin ] = useState('false');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const usernameChange = (e) => {
        setUsername(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <LoginContainer>
                <LoginForm>
                    Username :
                    <UsernameInput value={username} onChange={usernameChange} />
                    <br />
                    Password :
                    <PasswordInput value={password} onChange={passwordChange} />
                    <Submit />
                </LoginForm>
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
    placeholder: 'username'
})`
    border: 1px green solid;
`; 

const PasswordInput = styled.input.attrs({
    type: 'password',
    placeholder: 'password',
})``;

export default Login;