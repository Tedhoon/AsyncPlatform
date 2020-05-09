import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Community from 'components/community/Community';
import Home from 'components/home/Home';
import Auth from 'components/auth/Auth';
import Register from 'components/auth/Register';
import CommunityPost from 'components/community/CommunityPost';
import CommunityDetail from 'components/community/CommunityDetail';
import PrivateRoute from './PrivateRoute';


// 라우팅할 컴포넌트 다 써주면 될듯!
export default () => (
    <Fragment>
        <Switch>
            <Route exact path = "/" component={Home} />
            {/* exact path 해줘야 뒤의 url에서만 해당된다! */}
            <Route path = "/community" component = {Community} />
            <Route path = "/accounts" component={Auth} />
            <Route path = "/register" component={Register} />
            <PrivateRoute path = "/community_post" component={CommunityPost} />
            <PrivateRoute path = "/community_detail/:id" component={CommunityDetail} />
        </Switch>      
    </Fragment>
)