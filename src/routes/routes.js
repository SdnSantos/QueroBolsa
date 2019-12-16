import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

export default function Routes() {
  return (
    // permiti fazer a navegação entre páginas e as rotas ficam com uma barra
    // /main, /pagina2
    <BrowserRouter>
      {/* garantir que uma rota seja chamada por vez */}
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </BrowserRouter>
  );
}
