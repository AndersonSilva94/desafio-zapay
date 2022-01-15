import styled, { css } from 'styled-components';

export const NextLaunchContainer = styled.div`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    margin-top: -150px;

    h1 {
      font-size: 2.5rem;
      color: white;
    }

    @media (max-width: 500px) {
      margin-top: -180px;
      h1 {
        font-size: 2rem;
      }
    }
  `}
`;

export const SectionContainer = styled.section`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 414px) {
      grid-template-columns: 1fr;
    }
  `}
`;
