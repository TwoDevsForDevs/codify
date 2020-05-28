import React from 'react';

import { Wrapper } from './styles';

const AuthLayout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AuthLayout;
