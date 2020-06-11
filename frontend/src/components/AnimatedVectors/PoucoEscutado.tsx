import React from 'react';
import Lottie from 'lottie-react-web';

import ghost from './data/ghost.json';

const PoucoEscutado: React.FC = () => {
  return (
    <Lottie
      options={{
        animationData: ghost,
      }}
    />
  );
};

export default PoucoEscutado;
