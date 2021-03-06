import styled, { css } from 'styled-components';

const LaunchCardContainer = styled.div`
  ${() => css`
    width: 100%;
    margin-top: 1rem;
    box-shadow: 4px 4px 10px gray;

    .imgContainer {
      background: white;
      height: 18rem;

      img {
        object-fit: contain;
        max-width: 100%;
        width: 100%;

        max-height: 100%;
        height: 100%  
      }
    }

    .nameContainer {
      background: var(--header);
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

export default LaunchCardContainer;
