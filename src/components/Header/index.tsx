import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './styles';

function Header() {
  return (
    <HeaderContainer>
      <header>
        <h1>SpaceX</h1>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/old">
            Lançamentos Passados
          </Link>
          <Link to="/next">
            Próximos Lançamentos
          </Link>
        </nav>
      </header>
    </HeaderContainer>
  );
}

export default Header;
