import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// 단순히 PrivateRoute로 설정해주고 이곳에서 권한을 검증한 후 원하는데로 redirection 시켜주면 된다!

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props => {
            if(auth.isLoading){
                return <h2>로그인해라.......</h2>
            }else if(!auth.isAuthenticated){
                return <Redirect to="/accounts" />
            }else{
                return <Component {...props} />
            }

        }}
        />
    )
}

PrivateRoute.propTypes = {
    auth : PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth : state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
