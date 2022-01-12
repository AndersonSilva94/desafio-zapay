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

function OldLaunch() {
  const [past, setPast] = useState<GetDataProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const getPast = await apiSpaceX.get('/past');
      setPast(getPast.data);
    };

    getData();
  }, []);

  return (
    <Container>
      {past.length > 0 ? (
        <>
          <h1>Lançamentos Passados</h1>
          <SectionContainer>
            {past && past.map((pastLaunches) => (
              <LaunchCard key={pastLaunches.name} launch={pastLaunches} />
            ))}
          </SectionContainer>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default OldLaunch;
