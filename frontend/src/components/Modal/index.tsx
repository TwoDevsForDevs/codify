import React from 'react';

import SpotifyButton from '../SpotifyButton';

import { Container, Info } from './styles';

const Modal: React.FC = () => {
  return (
    <Container>
      <Info>
        <img
          src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
          alt="xD"
        />
        <SpotifyButton linkTo="#">Abrir no Spotify</SpotifyButton>
      </Info>
    </Container>
  );
};

export default Modal;
