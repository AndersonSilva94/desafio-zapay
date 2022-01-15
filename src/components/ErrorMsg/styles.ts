import styled, { css } from 'styled-components';

const ErrorMsgContainer = styled.div`
  ${() => css`
    max-width: 1120px;
    margin: 1rem auto 0;
    padding: 2rem 1rem 12rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
      color: white;
    }
  `}
`;

export default ErrorMsgContainer;
