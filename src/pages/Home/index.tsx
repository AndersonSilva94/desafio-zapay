import React, { useEffect, useState } from 'react';
import LaunchCard from '../../components/LaunchCard';
import apiSpaceX from '../../services/api';
import { Container, SectionContainer } from './styles';

interface GetDataProps {
  links: {
    patch: {
      small: string,
    },
    wikipedia: string,
  },
  name: string,
}

function Home() {
  const [latest, setLatest] = useState<GetDataProps>(
    {} as GetDataProps,
  );
  const [next, setNext] = useState<GetDataProps>(
    {} as GetDataProps,
  );

  useEffect(() => {
    const getDatas = async () => {
      const getLatest = await apiSpaceX.get('/latest');
      const getNext = await apiSpaceX.get('/next');

      setLatest(getLatest.data);
      setNext(getNext.data);
    };

    getDatas();
  }, []);

  return (
    <Container>
      <SectionContainer>
        <div>
          <h1>Último lançamento</h1>
          {latest && <LaunchCard launch={latest} />}
        </div>
        <div>
          <h1>Próximo lançamento</h1>
          {next && <LaunchCard launch={next} />}
        </div>
      </SectionContainer>
    </Container>
  );
}

export default Home;
