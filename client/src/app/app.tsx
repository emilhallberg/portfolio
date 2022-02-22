import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import ScrollRestoration from './components/scrollRestoration';

const SApp = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-areas: 'header' 'main' 'footer';
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SApp>
        <Header />
        <Main />
        <Footer />
        <ScrollRestoration />
      </SApp>
    </BrowserRouter>
  );
};

export default App;
