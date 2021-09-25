import React from 'react';
import axios from 'axios';

class Inicial extends React.Component {

    state = {
        playlist: ""
    }

    playlistNoEstado = (event) => {
        this.setState({playlist: event.target.value})
    }

    cadastraPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "gabriel-goncalves-maryam"
            }
        }
        const body = {
            name: this.state.playlist
        }

        axios.post(url, body, headers)
        .then((response) => {
            alert("Playlist cadastrada.")
            this.setState({playlist: ""})
        })
        .catch((erro) => {
            console.log(erro)
            alert(erro.message)
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.props.onClick}>Veja as playlists</button>
                <h1>Cadastro</h1>
                <input 
                    placeholder='Insira o nome da playlist'
                    value = {this.state.playlist}
                    onChange = {this.playlistNoEstado}
                    />
                <button onClick={this.cadastraPlaylist}>Cadastrar playlist</button>
            </div>
        )
    }
}

export default Inicial