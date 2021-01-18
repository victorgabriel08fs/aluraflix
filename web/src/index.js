import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import App from './App';
import CadastroVideo from './pages/cadastro/Video';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => {
        <div>Erro 404 --- Not Found</div>
      }} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

