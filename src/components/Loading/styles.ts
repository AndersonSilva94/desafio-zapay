import styled, { css } from 'styled-components';

const LoadingContainer = styled.div`
  ${() => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    margin-top: -50px;
  `}
`;

export default LoadingContainer;
