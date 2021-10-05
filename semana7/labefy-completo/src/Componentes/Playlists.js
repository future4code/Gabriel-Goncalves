import React from 'react';
import axios from 'axios';
import Detalhes from './Detalhes';

class Playlists extends React.Component {

    state = {
        playlists: [],
        detalhes: 'false',
    }

    componentDidMount () {
        this.mostraPlaylists()
    }

    exibeDetalhes = () => {
        if(this.state.detalhes === 'false') {
            this.setState({detalhes: 'true'})
        } else {
            this.setState({detalhes: 'false'})
        }
    }

    mostraPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "gabriel-goncalves-maryam"
            }
        }
        axios.get(url, headers)
        .then((response) => {
            this.setState({playlists: response.data.result.list})
        })
        .catch((erro) => {
            alert(erro)
        })
    }

    render () {

        const listaParaRenderizar = this.state.playlists.map((lista) => {
            return <div  key={lista.id}>
                <button onClick={this.exibeDetalhes}>Ver Mais</button>
                {lista.name}
                {this.state.detalhes === "true" && <Detalhes/>}
                <button>X</button>
            </div>
        })
        return (
            <div>
                <button onClick={this.props.onClick}>Tela inicial</button>
                <h1>Playlists</h1>
                {listaParaRenderizar}
            </div>
        )
    }
}

export default Playlists