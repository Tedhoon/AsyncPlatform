import React, { Fragment } from 'react';
import App from 'components/root/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'components/redux/store';

function Root() {
  return (
    <Fragment>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
    </Fragment>
  );
}

export default Root;
