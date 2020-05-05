import React, { Fragment } from 'react';
import App from 'components/root/App';
import { BrowserRouter as Router } from 'react-router-dom';

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
