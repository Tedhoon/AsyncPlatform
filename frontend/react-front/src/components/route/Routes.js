import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Community from '../community/Community';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import CommunityPost from '../community/CommunityPost';
// import Nav from '../base/Nav'


// 라우팅할 컴포넌트 다 써주면 될듯!
export default () => (
    <Fragment>
        <Switch>
            <Route exact path = "/" component={Home} />
            {/* exact paht 해줘야 뒤의 url에서만 해당된다! */}
            <Route path = "/community" component = {Community} />
            <Route path = "/accounts" component={Auth}/>
            <Route path = "/community_post/" component={CommunityPost} />
        </Switch>      
    </Fragment>
)