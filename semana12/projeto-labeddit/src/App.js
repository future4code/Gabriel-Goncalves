import React, {useState} from 'react'
import Router from './Rotas/Router';
import {useHistory} from 'react-router-dom'
import {exibeLogin} from "./Rotas/Coordenador"

function App() {

  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
