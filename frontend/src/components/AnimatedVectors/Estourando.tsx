import React from 'react';
import Lottie from 'lottie-react-web';

import fire from './data/fire.json';

const PoucoEscutado: React.FC = () => {
  return (
    <Lottie
      options={{
        animationData: fire,
      }}
    />
  );
};

export default PoucoEscutado;
