import React from 'react';
import Lottie from 'lottie-react-web';

import music from './data/music.json';

const Popular: React.FC = () => {
  return (
    <Lottie
      options={{
        animationData: music,
      }}
    />
  );
};

export default Popular;
