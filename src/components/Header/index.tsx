import React, { useState } from 'react';
import { HeaderContainer, MenuIcon } from './styles';
import logo from '../../assets/logo.png';
import Menu from '../Menu';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContainer>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
        <Menu open={openMenu} />
      </header>
    </HeaderContainer>
  );
}

export default Header;
