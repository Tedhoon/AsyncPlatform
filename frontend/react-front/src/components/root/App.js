import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from 'components/base/Nav';
import Footer from 'components/base/Footer';
import Routes from 'components/route/Routes';

import store from 'store';
import { Provider } from 'react-redux';

import { loadUser } from 'actions/authActions';


function App() {
  
  useEffect(function(){
    store.dispatch(loadUser());
    console.log("loadUser dispatch")
  },[])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Nav />
      <Section>
        <Routes />
      </Section>
      <Footer />
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const Section = styled.div`
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 50px;
`;


export default App;
