import React from 'react';
import axios from 'axios'

class ListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.exibeListaUsuarios()
    }

    exibeListaUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const headers = {
            headers: {
                Authorization: "gabriel-goncalves-maryam"
            }
        }
        axios
        .get(url, headers)
        .then((response) => {
            this.setState({usuarios: response.data})
        })
        .catch((erro) => {
            alert('Não foi desta vez')
        })
    }

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const headers = {
            headers: {
                Authorization: "gabriel-goncalves-maryam"
            }
        }

        axios
        .delete (url, headers)
        .then((response) => {
            alert("Usuário deletado!")
            this.exibeListaUsuarios()
        })
        .catch((erro) => {
            alert('Não foi desta vez, Champs!')
        })
    }

    render() {
        let listaDeUsuarios = this.state.usuarios.map((usuario) => {
            return <li key={usuario.id}>{usuario.name}<button onClick={() => this.deletaUsuario(usuario.id)}>X</button></li>
        })
        return (
            <div>
                <button onClick={this.props.exibeCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaDeUsuarios}
            </div>
        )
    }
}

export default ListaUsuarios