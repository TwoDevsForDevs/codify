import React from 'react';

import Header from '../../../components/Header';

import { Wrapper, Main } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />

      <Main>{children}</Main>
    </Wrapper>
  );
};

export default DefaultLayout;
