import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Community from '../community/Community';
// import Nav from '../base/Nav'

export default () => (
    <Router>
        <Route path = "/" />
        <Route path = "/community" component = {Community} />
        <Route path = "/accounts" />
    </Router>
)