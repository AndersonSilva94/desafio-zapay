import styled, { css } from 'styled-components';

interface MenuContainerProps {
  open: boolean;
}

const MenuContainer = styled.nav<MenuContainerProps>`
  ${({ open }) => css`
    margin-left: 5rem;

    ul {
      list-style: none;
      display: flex;
      flex-flow: row nowrap;

      li {
        letter-spacing: 1px;
        margin-left: 2rem;
        padding: 0.8rem;
        
        a {
          color: white;
        }

        &:hover {
          background: white;
          border-radius: 3px;
          
          a {
            color: var(--header);
          }
        }
      }
    }

    @media (max-width: 800px) {
      ul {
        flex-flow: column;
        position: fixed;
        transform: ${open ? 'translateX(0)' : 'translateX(100%)'} ;
        transition: transform 0.3s ease-in-out;
        margin-top: 10vh;
        top: 0;
        right: 0;
        height: 90vh;
        background: var(--header);
        width: 50vw;
        padding-top: 2rem;
        z-index: 20;
      }
    }
  `}
`;

export default MenuContainer;
