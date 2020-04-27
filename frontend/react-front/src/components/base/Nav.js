import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// // import Routes from '../route/Routes';
// import Community from '../community/Community';


function Nav() {
    return(
        <React.Fragment>
            <ul>
                <li><Link exact to = "/">Home</Link></li>
                <li><Link exact to = "/community">community</Link></li>
                <li><NavLink exact to = "/accounts">login/signup</NavLink></li>
            </ul>
        </React.Fragment>
    )
}

export default Nav;