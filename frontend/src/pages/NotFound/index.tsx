import React from 'react';

import PoucoEscutado from '../../components/AnimatedVectors/PoucoEscutado';
import SpotifyButton from '../../components/SpotifyButton';

import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <PoucoEscutado />

      <h1>404 Error.</h1>
      <p>Não conseguimos encontrar a página que você estava procurando.</p>

      <SpotifyButton href="/">Voltar a página inicial</SpotifyButton>
    </Container>
  );
};

export default NotFound;
