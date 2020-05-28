import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import AppProvider from './hooks/index';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </Router>
  );
};

export default App;
