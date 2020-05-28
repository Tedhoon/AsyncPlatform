import React,{ useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from 'actions/authActions';

const Nav = ({auth:{isAuthenticated,user}, logout}) => {

    useEffect(()=>{
        console.log(user);
        console.log(isAuthenticated)
    },[user,isAuthenticated])


    // const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
    // useEffect(()=>{
    //     console.log("isAuthenticated 👇")
    //     console.log(isAuthenticated)

    // },[isAuthenticated])

    const onLogout = () => {
        logout();
    }

    return(
        <React.Fragment>
            <ul>
                <li><Link exact to = "/">Home</Link></li>
                <li><Link exact to = "/community">community</Link></li>
                <li>
                    {isAuthenticated?
                        <Logout onClick={onLogout} />
                        :
                        <NavLink exact to = "/accounts">login/signup</NavLink>
                    }
                </li>
            </ul>
            {user ? 
                `${user.username === undefined ? '아직': user.username } 님 안녕하세여` 
            : '안뜸'}
        </React.Fragment>
    )
}


const Logout = styled.input.attrs({
    type: "button",
    value: "로그아웃"
})`
`;



Nav.propTypes = {
    auth : PropTypes.object.isRequired,
    logout : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(Nav);