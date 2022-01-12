import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    margin-top: -150px;
  `}
`;

export const SectionContainer = styled.section`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    h1 {
      font-size: 2rem;
      color: white;
    }
  `}
`;
