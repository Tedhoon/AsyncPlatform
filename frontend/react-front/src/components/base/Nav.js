import React,{ useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// // import Routes from '../route/Routes';
// import Community from '../community/Community';
import { useSelector } from 'react-redux';


function Nav() {
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
    useEffect(()=>{
        // console.log(state)
        // console.log(auth);
        console.log("isAuthenticated 👇")
        console.log(isAuthenticated)

    },[isAuthenticated])
    return(
        <React.Fragment>
            <ul>
                <li><Link exact to = "/">Home</Link></li>
                <li><Link exact to = "/community">community</Link></li>
                <li><NavLink exact to = "/accounts">login/signup</NavLink></li>
            </ul>
            { isAuthenticated ? "로그인" : "로그아웃"}
        </React.Fragment>
    )
}

export default Nav;