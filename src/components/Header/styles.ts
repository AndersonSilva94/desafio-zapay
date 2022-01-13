import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
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

      div {
        padding: 0 2rem;
        background: white;
        border-radius: 50%;

        img {
          max-width: 10rem;
          max-height: 10rem;
        }
      }

      nav {
        margin-left: 5rem;

        a {
          display: inline-block;
          position: relative;
          padding: 0.8rem;
          color: white;

          transition: color 0.2s;

          & + a {
            margin-left: 2rem;
          }

          &:hover {
            background: white;
            border-radius: 3px;
            color: var(--header);
          }
        }
      }
      
      @media (max-width: 500px) {
        div {
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

export default HeaderContainer;
