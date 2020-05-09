import React, { Fragment } from 'react';
import App from 'components/root/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from 'components/redux/store';

function Root() {
  return (
    <Fragment>
        <Router>
            <App />
        </Router>
    </Fragment>
  );
}

export default Root;
