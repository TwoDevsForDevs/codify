import React, { useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Authenticate: React.FC = () => {
  const { getCredentials } = useAuth();

  useEffect(() => {
    getCredentials();
  }, [getCredentials]);

  return (
    <Container>
      <FaSpotify size={80} color="#fff" />
    </Container>
  );
};

export default Authenticate;
