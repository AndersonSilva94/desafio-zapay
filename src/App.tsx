import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';
import { ContainerApp, Main } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ContainerApp>
        <Main>
          <Header />
          <Routes />
        </Main>
        <Footer />
      </ContainerApp>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
