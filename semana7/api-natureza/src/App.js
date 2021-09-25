import React from "react";
import axios from "axios";
import styled from "styled-components";

const TelaInicial = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const CardDasMissoes = styled.div`
border: 1px solid green;
border-radius: 100px;
width: 50vw;
height: 25vh;
margin: 8px 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-items: center;
`

const LinkEstilizado = styled.a`
grid-row: 2/3;
grid-column: 1/3;
text-decoration:none;
color: blue;
`

const ParagrafoEstilizado1 = styled.p`
grid-row: 1/2;
grid-column: 1/2;
`

const ParagrafoEstilizado2 = styled.p`
grid-row: 1/2;
grid-column: 2/3;
`

class App extends React.Component {

  state = {
    missoes: []
  }

  componentDidMount () {
    this.pegaMissoes()
  }

  pegaMissoes = () => {
    const url = "https://api.spacexdata.com/v3/missions"

    axios.get(url)
    .then((response) => {
      this.setState({missoes: response.data})
    }).catch((erro) => {
      console.log(erro)
    })
  };

  render () {

    let missoesParaRenderizar = this.state.missoes.map((missao) => {
      return (
        <CardDasMissoes key={missao.mission_id}>
          <ParagrafoEstilizado1>Nome: {missao.mission_name}</ParagrafoEstilizado1>
          <ParagrafoEstilizado2>Fabricantes: {missao.manufacturers.map((fabricante) => <span key={fabricante}>
            {fabricante}<br/></span>)}
            </ParagrafoEstilizado2>
          <LinkEstilizado href={missao.wikipedia} target="_blank">Veja na Wiki</LinkEstilizado>
        </CardDasMissoes>        
      )
    })
    
    return (
      <TelaInicial>
        <h1>Missões</h1>
        {missoesParaRenderizar}
      </TelaInicial>
    );
  }
  
}

export default App;
