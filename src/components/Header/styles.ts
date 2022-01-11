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

      h1 {
        font-size: 2.5rem;
        color: white
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
    }
  `}
`;

export default HeaderContainer;
