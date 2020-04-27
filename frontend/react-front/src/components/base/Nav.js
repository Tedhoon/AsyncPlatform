import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';


const Nav = () => {
    return(
        <React.Fragment>
            <BrowserRouter>
                <ul>
                    <li><NavLink exact to = "/">icon</NavLink></li>
                    <li><NavLink exact to = "/community">community</NavLink></li>
                    <li><NavLink exact to = "/accounts">login/signup</NavLink></li>
                </ul>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Nav;