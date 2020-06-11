import React from 'react';
import Lottie from 'lottie-react-web';

import eye from './data/eye.json';

const ChamandoAtencao: React.FC = () => {
  return (
    <Lottie
      options={{
        animationData: eye,
      }}
    />
  );
};

export default ChamandoAtencao;
