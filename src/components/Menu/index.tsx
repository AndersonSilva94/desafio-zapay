import React from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from './styles';

interface MenuProps {
  open: boolean;
}

function Menu({ open }: MenuProps) {
  return (
    <MenuContainer open={open}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/past">
            Lançamentos Passados
          </Link>
        </li>
        <li>
          <Link to="/next">
            Próximos Lançamentos
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
}

export default Menu;
