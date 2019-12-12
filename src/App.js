import React from 'react';

import './config/ReactotronConfig';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
