import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/home';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './components/pages/cadstro/video'
import CadastreoCategoria from './components/pages/cadstro/categoria';


function Pagina404(){
  return(
    <div>
      Erro 404
    </div>
  )
}




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component= {Home} exact/>
      <Route path="/cadastro/video" component= {CadastroVideo}/>
      <Route path="/cadastro/categoria" component= {CadastreoCategoria}/>
      <Route component= {Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

