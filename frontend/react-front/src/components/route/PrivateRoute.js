import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// 단순히 PrivateRoute로 설정해주고 이곳에서 권한을 검증한 후 원하는데로 redirection 시켜주면 된다!

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    // component는 Component라는 이름으로 정해줬을 뿐이고,
    // ...rest로 비구조화 할당을 해주면, 앞에 component와 auth를 뺀 모두를 받아와서 rest라는 이름에 넣어준 것이다!
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
