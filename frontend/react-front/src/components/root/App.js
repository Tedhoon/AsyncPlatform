import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from 'components/base/Nav';
import Routes from 'components/route/Routes';
import Footer from 'components/base/Footer';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
        <Nav />
        <Section>
          <Routes />
        </Section>
        <Footer />
    </Fragment>
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
