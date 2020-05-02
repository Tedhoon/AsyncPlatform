import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {

    // const [ login, setLogin ] = useState('false');
    const [ username, setUsername ] = useState('asd');
    const [ password, setPassword ] = useState('1');

    return (
        <div>
            <LoginContainer>
                Username :
                <UsernameInput value={username} />
                Password :
                <PasswordInput />
            </LoginContainer>            
           
        </div>
    )
}

const LoginContainer = styled.div`
    width: 100%;
    height: 500px;
    border: red solid 1px;
`; 

const UsernameInput = styled.input.attrs({
    type: 'text'
})`
    border: 1px green solid;
`; 

const PasswordInput = styled.input.attrs({
    type: 'password',
    // value: ${password},
})``;

export default Login;