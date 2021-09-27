import React from 'react';
import Playlists from './Componentes/Playlists';
import Inicial from './Componentes/Inicial';

class App extends React.Component {

  state = {
    telaAtual: "inicial"
  }

  exibeTela = () => {
    switch (this.state.telaAtual) {
      case "playlists":
        return <Playlists
                  onClick = {this.exibeInicial}
              />
      
      case "inicial":
        return  <Inicial
                  onClick = {this.exibePlaylists}
                />

      default:
        return <p>ERRO! Página não encontrada.</p>
    }
  }

  exibeInicial = () => {
    this.setState({telaAtual: "inicial"})
  }

  exibePlaylists = () => {
    this.setState({telaAtual: "playlists"})
  }

  render () {
    return (
      <div>
        {this.exibeTela()}
      </div>
    )
  }
}

export default App