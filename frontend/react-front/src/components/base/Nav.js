import React from 'react';
import { BrowserRouter as Router, NavLink, Link, Route } from 'react-router-dom';
// import Routes from '../route/Routes';
import Community from '../community/Community';


const Nav = () => {
    return(
        <React.Fragment>
            <Router>
                <ul>
                    <li><Link to = "/">icon</Link></li>
                    <li><NavLink exact to = "/community">community</NavLink></li>
                    <li><NavLink exact to = "/accounts">login/signup</NavLink></li>
                </ul>
                <div>
                    <Route path = "/" />
                    <Route path = "/community" component = {Community} />
                    <Route path = "/accounts" />
                </div>
            </Router>
        </React.Fragment>
    )
}

export default Nav;