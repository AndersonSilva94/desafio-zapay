import React, { useEffect, useState } from 'react';
import ErrorMsg from '../../components/ErrorMsg';
import LaunchCard from '../../components/LaunchCard';
import Loading from '../../components/Loading';
import apiSpaceX from '../../services/api';
import { GetDataProps } from '../../types';
import { NextLaunchContainer, SectionContainer } from './styles';

function NextLaunch() {
  const [next, setNext] = useState<GetDataProps[]>([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const getNext = await apiSpaceX.get('/upcoming');

        setNext(getNext.data);
      } catch (error) {
        setErr(true);
      }
    };

    getData();
  }, []);

  function renderElements() {
    if (err) {
      return <ErrorMsg />;
    }
    return (
      <>
        <h1>Próximos Lançamentos</h1>
        <SectionContainer>
          {next && next.map((nextLaunches) => (
            <LaunchCard key={nextLaunches.name} launch={nextLaunches} />
          ))}
        </SectionContainer>
      </>
    );
  }

  return (
    <NextLaunchContainer>
      {next.length > 0 || err ? renderElements() : <Loading />}
    </NextLaunchContainer>
  );
}

export default NextLaunch;
