import React from 'react';
import Lottie from 'lottie-react-web';

import star from './data/star.json';

const BemConhecido: React.FC = () => {
  return (
    <Lottie
      options={{
        animationData: star,
      }}
    />
  );
};

export default BemConhecido;
