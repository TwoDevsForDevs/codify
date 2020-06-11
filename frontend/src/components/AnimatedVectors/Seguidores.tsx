import React from 'react';
import Lottie from 'lottie-react-web';

import heart from './data/heart.json';

const Seguidores: React.FC = () => {
  return (
    <Lottie
      options={{
        animationData: heart,
      }}
    />
  );
};

export default Seguidores;
