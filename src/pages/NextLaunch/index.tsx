import React, { useEffect, useState } from 'react';
import LaunchCard from '../../components/LaunchCard';
import Loading from '../../components/Loading';
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

function NextLaunch() {
  const [next, setNext] = useState<GetDataProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const getNext = await apiSpaceX.get('/upcoming');
      setNext(getNext.data);
    };

    getData();
  }, []);

  return (
    <Container>
      {next.length > 0 ? (
        <>
          <h1>Próximos lançamentos</h1>
          <SectionContainer>
            {next && next.map((nextLaunches) => (
              <LaunchCard key={nextLaunches.name} launch={nextLaunches} />
            ))}
          </SectionContainer>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default NextLaunch;
