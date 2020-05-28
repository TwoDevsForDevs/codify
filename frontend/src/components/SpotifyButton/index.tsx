import React from 'react';
import { FaSpotify } from 'react-icons/fa';

import { Container } from './styles';

interface ISpotifyButtonProps {
  linkTo: string;
}

const SpotifyButton: React.FC<ISpotifyButtonProps> = ({ children, linkTo }) => {
  return (
    <Container href={linkTo}>
      <FaSpotify size={24} color="#fff" />
      {children}
    </Container>
  );
};

export default SpotifyButton;
