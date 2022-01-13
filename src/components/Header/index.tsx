import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './styles';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <HeaderContainer>
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/past">
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
