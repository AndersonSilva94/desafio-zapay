import React from 'react';
import Lottie from 'react-lottie';
import rocketAnimation from '../../assets/rocket-loader.json';
import LoadingContainer from './styles';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height={350} width={350} />
    </LoadingContainer>
  );
}

export default Loading;
