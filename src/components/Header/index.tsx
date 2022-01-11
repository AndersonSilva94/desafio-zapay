import React from 'react';
import HeaderContainer from './styles';

function Header() {
  return (
    <HeaderContainer>
      <header>
        <h1>SpaceX</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#last">Últimos Lançamentos</a>
          <a href="#next">Próximos Lançamentos</a>
        </nav>
      </header>
    </HeaderContainer>
  );
}

export default Header;
