import styled, { css } from 'styled-components';
import { BiMenu } from 'react-icons/bi';

export const HeaderContainer = styled.div`
  ${() => css`
    width: 100%;
    background: var(--header);
    
    header {
      max-width: 1120px;
      margin: 0 auto;
      padding: 2rem 1rem 12rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        padding: 0 2rem;
        background: white;
        border-radius: 50%;

        img {
          max-width: 10rem;
          max-height: 10rem;
        }
      }
      
      @media (max-width: 500px) {
        .logo {
          padding: 0 1rem;

          img {
            max-width: 8rem;
            max-height: 8rem;
          }
        }
      }
    }
  `}
`;

export const MenuIcon = styled(BiMenu)`
  ${() => css`
    color: white;
    font-size: 30px;
    cursor: pointer;
    display: none;

    @media (max-width: 800px) {
      display: block;
      margin-right: -400px;
    }

    @media (max-width: 600px) {
      margin-right: -300px;
    }

    @media (max-width: 414px) {
      margin-right: -200px;
    }
  `}
`;
