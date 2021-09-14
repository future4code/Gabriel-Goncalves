import './App.css';
import DadosGerais from './Components/DadosGerais';
import Educacionais from './Components/Educacionais';
import Gerais from './Components/Gerais'
import Fim from './Components/Fim'
import React from 'react';

class App extends React.Component {
  state = {
    etapaUmConcluida: false,
    etapaDoisConcluida: false,
    etapaTresConcluida: false
  }
  render (){
    return (
      <div className="App">
        <DadosGerais/>
        <Educacionais/>
        <Gerais/>
        <Fim/>
      </div>
    )
  }
}

export default App;
