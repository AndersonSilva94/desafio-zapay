import styled, { css } from 'styled-components';

const FooterContainer = styled.footer`
  ${() => css`
    width: 100%;
    padding: 1rem;
    background: var(--header);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    a {
      color: white;

      &:hover {
        opacity: 0.8;
      }
    }

  `}
`;

export default FooterContainer;
