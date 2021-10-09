import React, {useState} from 'react';
import axios from 'axios'
import './App.css'
import Inicial from './Components/Inicial/Inicial';
import Matches from './Components/Matches/Matches';

function App() {

  const [tela, setTela] = useState("inicial")

  const limpaPerfisVisualizados = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear'
    const headers = {
      headers: {
        ContentType: 'application/json'
      }
    }
    axios.put(url, headers)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const exibeTela = () => {
    switch (tela) {
      case 'matches':
        return <Matches
                voltaTela={() => setTela('inicial')}
                />
          
      case 'inicial':
        return <Inicial
                voltaTela={() => setTela('matches')}
                />
  
      default: alert('ERRO')
        break
    }
  }

  return (
    <div className="fullPage">
      <header>
        AstroMatch
      </header>
      {exibeTela()}
      <button onClick={() => limpaPerfisVisualizados()}>Limpar</button>
    </div>
  );
}

export default App;