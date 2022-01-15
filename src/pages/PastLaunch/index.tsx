import React, { useEffect, useState } from 'react';
import ErrorMsg from '../../components/ErrorMsg';
import LaunchCard from '../../components/LaunchCard';
import Loading from '../../components/Loading';
import apiSpaceX from '../../services/api';
import { GetDataProps } from '../../types';
import { PasttLaunchContainer, SectionContainer } from './styles';

function PastLaunch() {
  const [past, setPast] = useState<GetDataProps[]>([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const getPast = await apiSpaceX.get('/past');

        setPast(getPast.data);
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
        <h1>Lançamentos Passados</h1>
        <SectionContainer>
          {past && past.map((pastLaunches) => (
            <LaunchCard key={pastLaunches.name} launch={pastLaunches} />
          ))}
        </SectionContainer>
      </>
    );
  }

  return (
    <PasttLaunchContainer>
      {past.length > 0 || err ? renderElements() : <Loading />}
    </PasttLaunchContainer>
  );
}

export default PastLaunch;
