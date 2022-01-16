import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';
import { ContainerApp, Main } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ContainerApp>
      <Main>
        <Header />
        <Routes />
      </Main>
      <Footer />
      <GlobalStyle />
    </ContainerApp>
  );
}

export default App;
