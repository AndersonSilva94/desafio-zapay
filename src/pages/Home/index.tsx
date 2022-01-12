import React, { useEffect, useState } from 'react';
import ErrorMsg from '../../components/ErrorMsg';
import LaunchCard from '../../components/LaunchCard';
import Loading from '../../components/Loading';
import apiSpaceX from '../../services/api';
import { GetDataProps } from '../../types';
import { Container, SectionContainer } from './styles';

function Home() {
  const [latest, setLatest] = useState<GetDataProps>(
    {} as GetDataProps,
  );
  const [next, setNext] = useState<GetDataProps>(
    {} as GetDataProps,
  );
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const getLatest = await apiSpaceX.get('/latest');
        const getNext = await apiSpaceX.get('/next');

        setLatest(getLatest.data);
        setNext(getNext.data);
      } catch (error) {
        setErr(true);
      }
    };

    getDatas();
  }, []);

  function renderElements() {
    if (err) {
      return <ErrorMsg />;
    }
    return (
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
    );
  }

  return (
    <Container>
      {next.name || err ? renderElements() : <Loading />}
    </Container>
  );
}

export default Home;
