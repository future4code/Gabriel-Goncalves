import './App.css';
import DadosGerais from './Components/DadosGerais';
import Educacionais from './Components/Educacionais';
import Gerais from './Components/Gerais'
import Fim from './Components/Fim'
import React from 'react';

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais/>;
      case 2:
        return <Educacionais/>;
      case 3: 
        return <Gerais/>;
      case 4:
        return <Fim/>;
      default:
        return <Fim/>
    }
  }

  pulaEtapa =() => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render (){
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <button onClick={this.pulaEtapa}>Próxima Etapa</button>
      </div>
    )
  }
}

export default App;
