import React from 'react';
import { GetDataProps } from '../../types';
import Container from './styles';

interface LaunchProps {
  launch: GetDataProps;
}

function LaunchCard({ launch }: LaunchProps) {
  return (
    <Container>
      <div className="imgContainer">
        <img src={launch.links?.patch.small} alt={launch.name} />
      </div>
      <div className="nameContainer">
        <h3>
          <a href={launch.links?.wikipedia} target="_blank" rel="noreferrer">
            {launch.name}
          </a>
        </h3>
      </div>
    </Container>
  );
}

export default LaunchCard;
