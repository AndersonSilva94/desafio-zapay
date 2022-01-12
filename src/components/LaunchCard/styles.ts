import styled, { css } from 'styled-components';

const Container = styled.div`
  ${() => css`
    width: 100%;
    margin-top: 1rem;

    .imgContainer {
      background: white;
      height: 18rem;

      img {
        max-width: 100%;
        width: 100%;

        max-height: 100%;
        height: 100%  
      }
    }

    .nameContainer {
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 0;
      cursor: pointer;

      a {
        color: white;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  `}
`;

export default Container;
