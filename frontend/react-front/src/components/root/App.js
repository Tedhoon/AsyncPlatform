import React, {Fragment} from 'react';
import './App.css';
import Nav from '../base/Nav';
import Routes from '../route/Routes';
import Footer from '../base/Footer';

function App() {
  return (
    <Fragment>
      <Nav />
      <div className={"section"}>
        <Routes />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
