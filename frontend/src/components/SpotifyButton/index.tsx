import React from 'react';
import { FaSpotify } from 'react-icons/fa';

import { Container } from './styles';

interface ISpotifyButtonProps {
  href: string;
}

const SpotifyButton: React.FC<ISpotifyButtonProps> = ({ children, href }) => {
  return (
    <Container href={href}>
      <FaSpotify color="#fff" />
      {children}
    </Container>
  );
};

export default SpotifyButton;
