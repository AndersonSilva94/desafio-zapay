import styled, { css } from 'styled-components';

export const ContainerApp = styled.div`
  ${() => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `}
`;

export const Main = styled.div`
  ${() => css`
    flex: 1;
  `}
`;
