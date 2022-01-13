import React from 'react';
import Lottie from 'react-lottie';
import rocketAnimation from '../../assets/rocket-loader.json';
import Container from './styles';

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
    <Container>
      <Lottie options={defaultOptions} height={350} width={350} />
    </Container>
  );
}

export default Loading;
