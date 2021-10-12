import React from 'react';
import ListaUsuarios from './ListaUsuarios'
import Cadastro from "./Cadastro"

class App extends React.Component {

  state = {
    tela: 'cadastro'
  }

  exibeTela = () => {
    switch (this.state.tela) {
      case 'cadastro':
        return <Cadastro exibeListaUsuarios={this.exibeListaUsuarios}/>
      
      case 'listaUsuarios':
        return <ListaUsuarios exibeCadastro={this.exibeCadastro} />

      default: 
        return <div>ERRO! Página não encontrada.</div>
    }
  }

  exibeListaUsuarios = () => {
    this.setState({tela: 'listaUsuarios'})
  }

  exibeCadastro = () => {
    this.setState({tela: 'cadastro'})
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


/* class App extends React.Component {

  state = {
    usuarios: [
      {
        name: "",
        email: ""
      }
    ],
    inputNome: '',
    inputEmail: ''
  }

adicionaUsuario = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

  const body = {
    name: this.state.inputNome,
    email: this.state.inputEmail
  }

  const novaListaUsuarios = [body, ...this.state.usuarios]
  this.setState({usuarios: novaListaUsuarios})

  axios
  .post (url,body, headers)
  .then((response) => {
  })
  .catch((error) => {
    alert(error)
  })
  this.setState({inputNome: ""})
  this.setState({inputEmail: ""})
}

  adicionaNomeUsuario = (event) => {
    this.setState({inputNome: event.target.value})
  }

  adicionaEmailUsuario = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  removeUsuario = (usuarioId) => {
    const novaListaUsuarios = this.state.usuarios.filter((usuario) => {
      return usuarioId !== usuario.id
    })
    this.setState({usuarios: novaListaUsuarios})
  }

  render () {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return <li key={usuario.id}><button onClick={this.removeUsuario}>X</button>{usuario.name}</li>
    })
    return (
      <div className="App">
        <input 
          type='text' 
          id='nome' 
          placeholder='Digite seu nome aqui'
          value = {this.state.inputNome} 
          onChange={this.adicionaNomeUsuario}
        />
        <input 
          type='text' 
          id='email' 
          placeholder='Digite seu e-mail aqui'
          value = {this.state.inputEmail}
          onChange={this.adicionaEmailUsuario} 
        />
        <input 
          type='button' 
          value='Cadastrar' 
          onClick={this.adicionaUsuario}
        />
        <div>
          <ul>
            {listaUsuarios}
          </ul>
        </div>
      </div>
    );
  }
}

export default App; */