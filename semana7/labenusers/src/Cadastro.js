import React from 'react';
import axios from 'axios'

const headers = {
    headers: {
      Authorization: "gabriel-goncalves-maryam"
    }
  };

class Cadastro extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }

    mudaNome = (event) => {
        this.setState({inputNome: event.target.value})
    } 

    mudaEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    cadastraUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        let body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios
        .post (url, body, headers)
        .then ((response) => {
            alert("Usuário cadastrado com sucesso")
            this.setState({inputNome: ""})
            this.setState({inputEmail: ""})
        })
        .catch((err) => {
            alert(err)
        })
    }

    render () {
        return (
            <div>
                <h2>Cadastro</h2>
                <button onClick={this.props.exibeListaUsuarios}>Ir para Lista de Usuários</button>
                <input
                    placeholder="Digite seu nome"
                    value={this.state.inputNome}
                    onChange={this.mudaNome}
                />
                <input 
                    placeholder='Digite seu email'
                    value={this.state.inputEmail}
                    onChange={this.mudaEmail}
                />
                <button onClick={this.cadastraUsuario}>Cadastrar</button>
            </div>
        )
    }
}

export default Cadastro